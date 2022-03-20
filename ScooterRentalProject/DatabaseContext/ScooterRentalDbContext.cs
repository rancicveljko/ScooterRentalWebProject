using Microsoft.EntityFrameworkCore;
using ProjekatWP.Models;

namespace ScooterRentalProject.DatabaseContext
{
    public class ScooterRentalDbContext : DbContext
    {
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
        public DbSet<Scooter> Scooters { get; set; }
        public DbSet<Shop> Shops { get; set; }

        public ScooterRentalDbContext(DbContextOptions options) : base(options)
        {

        }
    }
}