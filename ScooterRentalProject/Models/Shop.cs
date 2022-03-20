using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ProjekatWP.Models
{
    public class Shop
    {
        [Key]
        [Column("shopID")]
        public int ShopID { get; set; }
        [Column("shopName")]
        public string ShopName { get; set; }
        [Column("capacity")]
        public int Capacity { get; set; }
        [JsonIgnore]
        public virtual IEnumerable<Reservation> reservations { get; set; }
        [JsonIgnore]
        public virtual IEnumerable<Scooter> scooters { get; set; }
    }
}