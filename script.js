

$(document).ready(function() {
    setInterval(function() {
        update_time();
    }, 1000);
});
function update_time(){
    let date = new Date();
    let hour = date.getHours().toString().padStart(2, '0');
    let minute = date.getMinutes().toString().padStart(2, '0');
    let second = date.getSeconds().toString().padStart(2, '0');
    let digit_object = {
        'h1': hour[0],
        'h2': hour[1],
        'm1': minute[0],
        'm2': minute[1],
        's1': second[0],
        's2': second[1]
    };
    let segments = [
        'abcdef', 
        'bc', 
        'abdeg', 
        'abcdg', 
        'bcfg', 
        'acdfg', 
        'acdefg', 
        'abc', 
        'abcdefg', 
        'abcdfg', 
    ];
    $('.segment').hide();
    for (let key in digit_object) {
        let date_digit = parseInt(digit_object[key]);
        let single_segment_map = segments[date_digit];
        let single_segment_map_arr = single_segment_map.split("");
        $.each(single_segment_map_arr, function(index, value) {
            $('#' + key + '_' + value).show();
        });
    }
}
