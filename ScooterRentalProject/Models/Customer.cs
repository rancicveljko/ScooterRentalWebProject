using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace ProjekatWP.Models
{
    public class Customer
    {
        [Key]
        [Column("customerID")]
        public int CustomerID { get; set; }
        [Column("customerName")]
        public string CustomerName { get; set; }
        [JsonIgnore]
        public virtual IEnumerable<Reservation> reservations { get; set; }
    }
}