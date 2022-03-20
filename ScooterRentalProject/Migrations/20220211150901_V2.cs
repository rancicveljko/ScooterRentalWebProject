using Microsoft.EntityFrameworkCore.Migrations;

namespace ScooterRentalProject.Migrations
{
    public partial class V2 : Migration
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
                name: "ShopID",
                table: "Scooters",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "numOfScootersRented",
                table: "Reservations",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Scooters_ShopID",
                table: "Scooters",
                column: "ShopID");

            migrationBuilder.AddForeignKey(
                name: "FK_Scooters_Shops_ShopID",
                table: "Scooters",
                column: "ShopID",
                principalTable: "Shops",
                principalColumn: "shopID",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Scooters_Shops_ShopID",
                table: "Scooters");

            migrationBuilder.DropIndex(
                name: "IX_Scooters_ShopID",
                table: "Scooters");

            migrationBuilder.DropColumn(
                name: "ShopID",
                table: "Scooters");

            migrationBuilder.DropColumn(
                name: "numOfScootersRented",
                table: "Reservations");

            migrationBuilder.AddColumn<int>(
                name: "scooterFK",
                table: "Reservations",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_scooterFK",
                table: "Reservations",
                column: "scooterFK",
                unique: true,
                filter: "[scooterFK] IS NOT NULL");

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
