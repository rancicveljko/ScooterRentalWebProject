using Microsoft.EntityFrameworkCore.Migrations;

namespace ScooterRentalProject.Migrations
{
    public partial class V3 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "numOfScootersRented",
                table: "Reservations");

            migrationBuilder.AddColumn<string>(
                name: "propulsion",
                table: "Scooters",
                type: "nvarchar(max)",
                nullable: true);

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

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Reservations_Scooters_scooterFK",
                table: "Reservations");

            migrationBuilder.DropIndex(
                name: "IX_Reservations_scooterFK",
                table: "Reservations");

            migrationBuilder.DropColumn(
                name: "propulsion",
                table: "Scooters");

            migrationBuilder.DropColumn(
                name: "scooterFK",
                table: "Reservations");

            migrationBuilder.AddColumn<int>(
                name: "numOfScootersRented",
                table: "Reservations",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }
    }
}
