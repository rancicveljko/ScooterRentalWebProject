using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ProjekatWP.Models;
using ScooterRentalProject.DatabaseContext;
using ScooterRentalProject.DTOs.InputDTOs;

namespace ScooterRentalProject.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ScooterRentalController : ControllerBase
    {
        public ScooterRentalDbContext ScooterRentalContext { get; set; }
        public ScooterRentalController(ScooterRentalDbContext context)
        {
            ScooterRentalContext = context;
        }

        [Route("GetAllShops")]
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Shop>>> GetAllShops()
        {
            return await ScooterRentalContext.Shops.ToListAsync();
        }

        [HttpGet]
        [Route("GetAllScooters")]
        public async Task<ActionResult<IEnumerable<Scooter>>> GetAllScooters()
        {
            return await ScooterRentalContext.Scooters.Include(x => x.shop).ToListAsync();
        }

        [HttpPut]
        [Route("GetScootersForShop")]
        public async Task<ActionResult<IEnumerable<Scooter>>> GetScootersForShop([FromBody] GetScootersForShopDTO getScootersDTO)
        {
            Shop shop = await ScooterRentalContext.Shops.FindAsync(getScootersDTO.ShopID);
            return shop.scooters.ToList();
        }


        [Route("CreateReservation")]
        [HttpPost]
        public async Task<IActionResult> CreateReservation([FromBody] ReservationDTO reservationDTO)
        {
            Reservation newReservation = new Reservation();

            Customer customer = ScooterRentalContext.Customers.Find(reservationDTO.CustomerID);
            Shop shop = ScooterRentalContext.Shops.Find(reservationDTO.ShopID);
            var scooters = from sct in ScooterRentalContext.Scooters where reservationDTO.ScooterIDs.Contains(sct.ScooterID) select sct;

            newReservation.customer = customer;
            newReservation.shop = shop;
            newReservation.scooters = scooters;

            ScooterRentalContext.Reservations.Add(newReservation);
            await ScooterRentalContext.SaveChangesAsync();

            return new StatusCodeResult(200);
        }

        [Route("CheckReservation")]
        [HttpPut]
        public async Task<ActionResult<Reservation>> CheckReservation([FromBody] CheckReservationInputDTO reservationDTO)
        {
            Reservation reservation = await ScooterRentalContext.Reservations.Where(res => res.customer.CustomerID == reservationDTO.CustomerID && res.shop.ShopID == reservationDTO.ShopID)
                                                                             .FirstAsync();

            if (reservation != null)
                return reservation;
            return new StatusCodeResult(500);
        }

        [Route("CancelReservation")]
        [HttpDelete]
        public async Task<IActionResult> CancelReservation([FromBody] ReservationDTO reservationDTO)
        {
            Reservation reservation = await ScooterRentalContext.Reservations.Where(res => res.customer.CustomerID == reservationDTO.CustomerID && res.shop.ShopID == reservationDTO.ShopID)
                                                                              .FirstAsync();

            if (reservation != null)
            {
                ScooterRentalContext.Reservations.Remove(reservation);
                await ScooterRentalContext.SaveChangesAsync();
                return new StatusCodeResult(200);
            }
            return new StatusCodeResult(500);
        }

        [HttpPost]
        [Route("AddShop")]
        public async Task<IActionResult> AddShop([FromBody] AddShopDTO addShopDTO)
        {
            Shop shop = new Shop()
            {
                ShopName = addShopDTO.ShopName,
                Capacity = addShopDTO.Capacity
            };

            ScooterRentalContext.Add(shop);
            await ScooterRentalContext.SaveChangesAsync();

            return new StatusCodeResult(200);
        }

        [HttpPut]
        [Route("AddScooterToShop")]
        public async Task<IActionResult> AddScooterToShop([FromBody] AddScooterToShopDTO addScooterToShopDTO)
        {
            Shop shp = ScooterRentalContext.Shops.Find(addScooterToShopDTO.ShopID);
            Scooter scooter = new Scooter()
            {
                Propulsion = addScooterToShopDTO.Propulsion,
                shop = shp,
                Rented = false
            };
            // shp.scooters.Append(scooter);

            ScooterRentalContext.Scooters.Add(scooter);
            await ScooterRentalContext.SaveChangesAsync();
            return new StatusCodeResult(200);
        }
    }
}