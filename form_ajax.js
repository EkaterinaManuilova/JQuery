$(document).ready(function () {
    $("form").submit(function (event) {
        const formData = {
            user_name: $("#user_name").val(),
            user_second_name: $("#user_second_name").val(),
            user_last_name: $("#user_last_name").val(),
        };

        $.ajax({
            type: "POST",
            url: "dadata.php",
            data: formData,
            dataType: "json",
            encode: true,
        }).done(function (result) {
            console.log(result);

            for (let value of result) {
                console.log(value);
                const fio_res = value.result.split(' ');
                // console.log(value.result.split(' '));
                $("#result").html(
                    '<p>Фамилия ' + fio_res[0] + '</p><p>Имя ' + fio_res[1] + '</p><p> Отчество ' + fio_res[2] + '</p><p>Полное имя ' + value.result + '</p><p>В лице ' + value.result_genitive + '</p><p>Кому ' + value.result_dative + '</p><p>Согласовано ' + value.result_ablative + '</p>'
                );
            }

        });

        event.preventDefault();
    });
});