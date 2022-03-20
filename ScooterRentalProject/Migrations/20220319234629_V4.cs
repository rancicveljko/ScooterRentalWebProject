using Microsoft.EntityFrameworkCore.Migrations;

namespace ScooterRentalProject.Migrations
{
    public partial class V4 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_Scooters_scooterFK",
                table: "Reservations");

            migrationBuilder.DropIndex(
                name: "IX_Reservations_scooterFK",
                table: "Reservations");

            migrationBuilder.DropColumn(
                name: "scooterFK",
                table: "Reservations");

            migrationBuilder.AddColumn<int>(
                name: "capacity",
                table: "Shops",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "ReservationID",
                table: "Scooters",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Scooters_ReservationID",
                table: "Scooters",
                column: "ReservationID");

            migrationBuilder.AddForeignKey(
                name: "FK_Scooters_Reservations_ReservationID",
                table: "Scooters",
                column: "ReservationID",
                principalTable: "Reservations",
                principalColumn: "reservationID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Scooters_Reservations_ReservationID",
                table: "Scooters");

            migrationBuilder.DropIndex(
                name: "IX_Scooters_ReservationID",
                table: "Scooters");

            migrationBuilder.DropColumn(
                name: "capacity",
                table: "Shops");

            migrationBuilder.DropColumn(
                name: "ReservationID",
                table: "Scooters");

            migrationBuilder.AddColumn<int>(
                name: "scooterFK",
                table: "Reservations",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_scooterFK",
                table: "Reservations",
                column: "scooterFK");

            migrationBuilder.AddForeignKey(
                name: "FK_Reservations_Scooters_scooterFK",
                table: "Reservations",
                column: "scooterFK",
                principalTable: "Scooters",
                principalColumn: "scooterID",
                onDelete: ReferentialAction.Restrict);
        }
    }
}
