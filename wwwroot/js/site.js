﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

$(".btn-detalhes-chamado").click(function () {
    let chamadoId = $(this).attr("chamado-id");
    $.ajax({
        type: "GET",
        url: "/Fornecedor/DetailsModal/" + chamadoId,
        success: function (result) {
            $("#DetalhesChamadoModal").html(result);
            console.log(chamadoId);
            $("#modalDetalhesUsuario").modal("show"); // Use 'show' para abrir o modal
        },
    });
});

$(document).ready(function () {
    // Verifique se o DataTable já foi inicializado
    if (!$.fn.DataTable.isDataTable("#table-fornecedor")) {
        // Se não foi inicializado, então inicialize-o
        $("#table-fornecedor").DataTable();
    }
});

function getDatatable(id) {
    $(id).DataTable({
        ordering: true,
        paging: true,
        searching: true,
        oLanguage: {
            sEmptyTable: "Nenhum registro encontrado na tabela",
            sInfo: "Mostrar _START_ at&eacute; _END_ de _TOTAL_ registros",
            sInfoEmpty: "Mostrar 0 at&eacute; 0 de 0 Registros",
            sInfoFiltered: "(Filtrar de _MAX_ total registros)",
            sInfoPostFix: "",
            sInfoThousands: ".",
            sLengthMenu: "Mostrar _MENU_ registros por pagina",
            sLoadingRecords: "Carregando...",
            sProcessing: "Processando...",
            sZeroRecords: "Nenhum registro encontrado",
            sSearch: "Pesquisar",
            oPaginate: {
                sNext: "Proximo",
                sPrevious: "Anterior",
                sFirst: "Primeiro",
                sLast: "Ultimo",
            },
            oAria: {
                sSortAscending: ": Ordenar colunas de forma ascendente",
                sSortDescending: ": Ordenar colunas de forma descendente",
            },
        },
    });
}

$(".close-alert").click(function () {
    $(".alert").hide("hide");
});
