function serializeTOJson(form){
            var result = {};
            var list = form.serializeArray();
            list.forEach(function(i){
                result[i.name] = i.value;
            });
            return result;
};