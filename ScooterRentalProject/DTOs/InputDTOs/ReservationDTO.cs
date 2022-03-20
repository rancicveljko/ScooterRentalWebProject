namespace ScooterRentalProject.DTOs.InputDTOs
{
    public class ReservationDTO
    {
        public int CustomerID { get; set; }
        public int ShopID { get; set; }
        public int[] ScooterIDs { get; set; }
    }
}