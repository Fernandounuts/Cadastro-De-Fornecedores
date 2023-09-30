using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

#nullable disable

namespace CadastroDeFornecedores.Migrations
{
    /// <inheritdoc />
    public partial class asd : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Fornecedor",
                columns: table => new
                {
                    Id = table.Column<int>(type: "integer", nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.IdentityByDefaultColumn),
                    CNPJ = table.Column<string>(type: "text", nullable: false),
                    RazaoSocial = table.Column<string>(type: "text", nullable: true),
                    NomeFantasia = table.Column<string>(type: "text", nullable: true),
                    Email = table.Column<string>(type: "text", nullable: false),
                    Telefone = table.Column<string>(type: "text", nullable: true),
                    NomePessoaContato = table.Column<string>(type: "text", nullable: false),
                    Rua = table.Column<string>(type: "text", nullable: true),
                    Numero = table.Column<string>(type: "text", nullable: true),
                    Complemento = table.Column<string>(type: "text", nullable: true),
                    Bairro = table.Column<string>(type: "text", nullable: true),
                    Estado = table.Column<string>(type: "text", nullable: true),
                    Municipio = table.Column<string>(type: "text", nullable: true),
                    CEP = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Fornecedor", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Fornecedor");
        }
    }
}
