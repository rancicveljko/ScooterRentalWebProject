using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ProjekatWP.Models
{
    public class Scooter
    {
        [Key]
        [Column("scooterID")]
        public int ScooterID { get; set; }
        [Column("rented")]
        public bool Rented { get; set; }

        [Column("propulsion")]
        public string Propulsion { get; set; }

        [Column("shopFK")]
        public Shop shop { get; set; }

        [Column("reservationFK")]
        public Reservation reservation { get; set; }
    }
}