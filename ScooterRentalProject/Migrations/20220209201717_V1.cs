using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace ScooterRentalProject.Migrations
{
    public partial class V1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    customerID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    customerName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.customerID);
                });

            migrationBuilder.CreateTable(
                name: "Scooters",
                columns: table => new
                {
                    scooterID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    rented = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Scooters", x => x.scooterID);
                });

            migrationBuilder.CreateTable(
                name: "Shops",
                columns: table => new
                {
                    shopID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    shopName = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Shops", x => x.shopID);
                });

            migrationBuilder.CreateTable(
                name: "Reservations",
                columns: table => new
                {
                    reservationID = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    scooterFK = table.Column<int>(type: "int", nullable: true),
                    shopFK = table.Column<int>(type: "int", nullable: true),
                    customerFK = table.Column<int>(type: "int", nullable: true),
                    rentedFrom = table.Column<DateTime>(type: "datetime2", nullable: false),
                    rentedTo = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reservations", x => x.reservationID);
                    table.ForeignKey(
                        name: "FK_Reservations_Customers_customerFK",
                        column: x => x.customerFK,
                        principalTable: "Customers",
                        principalColumn: "customerID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Reservations_Scooters_scooterFK",
                        column: x => x.scooterFK,
                        principalTable: "Scooters",
                        principalColumn: "scooterID",
                        onDelete: ReferentialAction.Restrict);
                    table.ForeignKey(
                        name: "FK_Reservations_Shops_shopFK",
                        column: x => x.shopFK,
                        principalTable: "Shops",
                        principalColumn: "shopID",
                        onDelete: ReferentialAction.Restrict);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_customerFK",
                table: "Reservations",
                column: "customerFK");

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_scooterFK",
                table: "Reservations",
                column: "scooterFK",
                unique: true,
                filter: "[scooterFK] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_Reservations_shopFK",
                table: "Reservations",
                column: "shopFK");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Reservations");

            migrationBuilder.DropTable(
                name: "Customers");

            migrationBuilder.DropTable(
                name: "Scooters");

            migrationBuilder.DropTable(
                name: "Shops");
        }
    }
}
