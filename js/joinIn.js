$(function (){
    let province = $('#cmbProvince');
    let city = $('#cmbCity');
    loadProvinces(province);
    loadCitys(city);
})


function loadProvinces(province){
    $.post(localStorage.getItem('http') + 'region/get_region',{
        pid:0
    },function (res) {
        console.log(res.data)
        addDataToSelect(res.data,province);
    })
}



function loadCitys(city){
    // 省改变时  获取选中的id
    $('#cmbProvince').change(function (){
        $.post(localStorage.getItem('http') + 'region/get_region',{
            pid:0,
        },function (res) {
            console.log(res.data)
            var id = res.data[$('#cmbProvince').find("option:selected").val()-1].id
            console.log(id)
            get_id(id);
        })

        $('#cmbProvince').children('option').first().hide();
    })


    function get_id(id){
        var obj = {}
        var ids = "id"
        var value = id
        obj[ids] = value
        console.log(obj);



        $.post(localStorage.getItem('http') + 'region/get_region',{
            pid:obj[ids],
        },function (res) {
            console.log(res.data)
            addDataToSelect(res.data, city);


        });

        // 市改变时  获取选中的id
        $('#cmbCity').change(function (){
            $.post(localStorage.getItem('http') + 'region/get_region',{
                pid:obj[ids],
            },function (res) {
                console.log(res.data)
                var city_ids = res.data[$('#cmbCity').find("option:selected").val()-1].id
                console.log(city_ids)
                get_id_1(city_ids);


            })

            $('#cmbCity').children('option').first().hide();



        })
        function get_id_1(city_ids){

            var obj = {}
            var city_ids1 = "city_ids_1"
            var value1 = city_ids
            obj[city_ids1] = value1
            console.log(obj);


            $('.head_co button').click(function (){
                var name = document.getElementById('name_item').value
                var phone = document.getElementById('phone_item').value
                $.post(localStorage.getItem('http') + 'module/fast_reg',{
                    province_id:obj[ids],
                    city_id:obj[city_ids1],
                    name:name,
                    phone:phone
                },function (res) {
                    console.log(res)
                })
            })
        }


    }




}





    // 省选择之后获取市
    // $.post(localStorage.getItem('http') + 'region/get_region',{
    //     pid:id,
    // },function (res) {
    //     console.log(res.data)
    //     addDataToSelect(res.data,city);
    //
    //
    //     // 默认未改变
    //     var city_ids = res.data[$('#cmbCity').find("option",0).val()-1].id
    //     console.log(city_ids)
    //
    //     // 市改变时  获取选中的id
    //     $('#cmbCity').change(function (){
    //         var city_ids = res.data[$('#cmbCity').find("option:selected").val()-1].id
    //         console.log(city_ids)
    //     })
    //
    //     $('.head_co button').click(function (){
    //         var province_id = id
    //         var city_id = city_ids
    //         var name = document.getElementById('name_item').value
    //         var phone = document.getElementById('phone_item').value
    //         console.log(province_id)
    //         console.log(city_id)
    //         console.log(name)
    //         console.log(phone)
    //         // $.post(localStorage.getItem('http') + 'module/fast_reg',{
    //         //     province_id:'',
    //         //     city_id:'',
    //         //     name:'',
    //         //     phone:''
    //         // },function (res) {
    //         //     console.log(res)
    //         // })
    //     })
    //
    //         // $('#cmbCity').click(function (){
    //         //     clkBool=true;
    //         //
    //         //     // 市改变时  获取选中的id
    //         //     $('#cmbCity').change(function (){
    //         //         $.post(localStorage.getItem('http') + 'region/get_region',{
    //         //             pid:id,
    //         //         },function (res) {
    //         //             console.log(res.data)
    //         //             var city_ids = res.data[$('#cmbCity').find("option:selected").val()-1].id
    //         //             console.log(city_ids)
    //         //             $('.head_co button').click(function (){
    //         //                 var province_id = id
    //         //                 var city_id = city_ids
    //         //                 var name = document.getElementById('name_item').value
    //         //                 var phone = document.getElementById('phone_item').value
    //         //                 console.log(province_id)
    //         //                 console.log(city_id)
    //         //                 console.log(name)
    //         //                 console.log(phone)
    //         //                 // $.post(localStorage.getItem('http') + 'module/fast_reg',{
    //         //                 //     province_id:'',
    //         //                 //     city_id:'',
    //         //                 //     name:'',
    //         //                 //     phone:''
    //         //                 // },function (res) {
    //         //                 //     console.log(res)
    //         //                 // })
    //         //             })
    //         //         })
    //         //     })
    //         // })
    //
    //
    //
    //     // 默认未改变
    //     // var city_ids = res.data[$('#cmbCity').find("option",0).val()-1].id
    //     // console.log(city_ids)
    //     // $('.head_co button').click(function (){
    //     //     var province_id = id
    //     //     var city_id = city_ids
    //     //     var name = document.getElementById('name_item').value
    //     //     var phone = document.getElementById('phone_item').value
    //     //     console.log(province_id)
    //     //     console.log(city_id)
    //     //     console.log(name)
    //     //     console.log(phone)
    //     //     // $.post(localStorage.getItem('http') + 'module/fast_reg',{
    //     //     //     province_id:'',
    //     //     //     city_id:'',
    //     //     //     name:'',
    //     //     //     phone:''
    //     //     // },function (res) {
    //     //     //     console.log(res)
    //     //     // })
    //     // })
    //
    //     // if($('#cmbCity>option').val() == 1){
    //     //     console.log(1)
    //     //     // 市未改变时  获取默认第一个id
    //     //     $('.head_co button').click(function (){
    //     //         var province_id = id
    //     //         var city_id = city_ids
    //     //         var name = document.getElementById('name_item').value
    //     //         var phone = document.getElementById('phone_item').value
    //     //         console.log(province_id)
    //     //         console.log(city_id)
    //     //         console.log(name)
    //     //         console.log(phone)
    //     //         // $.post(localStorage.getItem('http') + 'module/fast_reg',{
    //     //         //     province_id:'',
    //     //         //     city_id:'',
    //     //         //     name:'',
    //     //         //     phone:''
    //     //         // },function (res) {
    //     //         //     console.log(res)
    //     //         // })
    //     //     })
    //     // }else{
    //     //     console.log(2)
    //     //
    //     // }
    //     //
    //
    //
    // })



function addDataToSelect(array,selectobj){
    selectobj.empty();
    $('<option>').attr("value",0).html("请选择").appendTo(selectobj);
    $.each(array,(index,value)=>{
        $('<option>').attr('value',index+1).html(value.name).appendTo(selectobj);
    })
}

// 点击按钮跳转页面
$('.problem button,.process button,.whyJoin button').click(function (){
    location.href = 'https://dft.zoosnet.net/LR/Chatpre.aspx?id=DFT45969991&lng=cn'
})

