﻿
test('isEqual()', function ()
{
    $.ajax(
        {
            url: "/api/Bible/GetName",
            type: "get",
            data: {"date":"aaaaa"},
            succcess: function(data)
            {
                console.log(data);
            }
            
});
    //var result = new ProductDetail();
    //var testCast = buildCase();
    //for (var i = 0; i < result.products.length; i++)
    //{
    //    ok(isEqual(result.products[i].name, testCast[i].Name), 'name is equal');
    //    ok(isEqual(result.products[i].type, testCast[i].Type), 'type is equal');
    //}

});
