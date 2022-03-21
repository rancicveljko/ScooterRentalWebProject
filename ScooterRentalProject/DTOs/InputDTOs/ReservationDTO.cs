using System;

namespace ScooterRentalProject.DTOs.InputDTOs
{
    public class ReservationDTO
    {
        public string CustomerName { get; set; } // za svaku rez se pravi novi Customer
        public int ShopID { get; set; }
        public int[] ScooterIDs { get; set; }
        public DateTime RentedFrom { get; set; }
        public DateTime RentedTo { get; set; }
    }
}