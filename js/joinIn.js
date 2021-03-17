$(function (){
    let province = $('#cmbProvince');
    let city = $('#cmbCity');
    loadProvinces(province);

    $(document).on("change","#cmbProvince",function(){
        var province_id = $(this).val();
        // console.log(province_id);
        loadCities(province_id,city);
    });

    function loadProvinces(province){
        $.post(localStorage.getItem('http') + 'region/get_region',{
            pid:0
        },function (res) {
            console.log(res.data)
            addDataToSelect(res.data,province);
        })
    }

    function loadCities(province_id,city){
        if (province_id == 0){
            addDataToSelect([],city);
            return false;
        }
        // 省改变时  获取选中的id
        $.post(localStorage.getItem('http') + 'region/get_region',{
            pid:province_id,
        },function (res) {
            addDataToSelect(res.data,city);
        })
        $('#cmbCity').children('option').first().hide();
    }

    $('#fast_reg').click(function (){
        var name = document.getElementById('name_item').value,
            phone = document.getElementById('phone_item').value,
            province_id = $("#cmbProvince").val(),
            city_id = $("#cmbCity").val();

            //province_id   必填
            if(province_id != null && province_id != '' && province_id != 0){
                this.province_id = province_id
            }
            else{
                layer.msg('请选择省');
                return  false;
            }
            //city_id   必填
            if(city_id != null && city_id != '' && city_id != 0){
                this.city_id = city_id
            }
            else{
                layer.msg('请选择市');
                return  false;
            }
            //name  正则  必填
            var nameReg = /^[\u4e00-\u9fa5]{2,6}$/;  //定义约束,要求输入2到6个中文
            if(name && nameReg.test(name)){
                this.name = name
            }
            else{
                layer.msg('请输入姓名');
                return  false;
            }
            //phone 正则  必填
            var phoneReg = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
            if(phone && phoneReg.test(phone)) {
                this.phone = phone
            }
            else{
                layer.msg('请输入手机号');
                return  false;
            }

        $.post(localStorage.getItem('http') + 'module/fast_reg',{
            province_id:province_id,
            city_id:city_id,
            name:name,
            phone:phone
        },function (res) {
            console.log(res)
            if(res.code == 1) {
                // $('#cmbProvince').val('请选择');
                var cmbProvince = document.getElementById('cmbProvince');
                var opts_1= cmbProvince.getElementsByTagName("option");
                opts_1[0].selected=true;
                // $('#cmbCity').val('请选择');
                var cmbCity = document.getElementById('cmbCity');
                var opts_2 = cmbCity.getElementsByTagName("option");
                opts_2[0].selected=true;
                $('#name_item').val('');
                $('#phone_item').val('');
                layer.msg(res.msg);
            }else{
                console.log(res.msg);
                layer.msg(res.msg);
            }
        })
    })


    function addDataToSelect(array,selectobj){
        selectobj.empty();
        $('<option>').attr("value",0).html("请选择").appendTo(selectobj);
        $.each(array,(index,value)=>{
            $('<option>').attr('value',value.id).html(value.name).appendTo(selectobj);
        })
    }

    // 点击按钮跳转页面
    $('.problem button,.process button,.whyJoin button').click(function (){
        location.href = 'https://dft.zoosnet.net/LR/Chatpre.aspx?id=DFT45969991&lng=cn'
    })

})