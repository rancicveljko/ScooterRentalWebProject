using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ProjekatWP.Models
{
    public class Reservation
    {
        [Key]
        [Column("reservationID")]
        public int ReservationID { get; set; }

        [JsonIgnore]
        public virtual IEnumerable<Scooter> scooters { get; set; }

        [ForeignKey("shopFK")]
        public Shop shop { get; set; }

        [ForeignKey("customerFK")]
        public Customer customer { get; set; }
        [Column("rentedFrom")]
        public DateTime RentedFrom { get; set; }
        [Column("rentedTo")]
        public DateTime RentedTo { get; set; }
    }
}