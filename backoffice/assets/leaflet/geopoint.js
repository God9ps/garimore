

GeoPoint = function (lon, lat) {


    switch (typeof(lon)) {

        case 'number':

            this.lonDeg = this.dec2deg(lon, this.MAX_LON);
            this.lonDec = lon;

            break;

        case 'string':

            if (this.decode(lon)) {
                this.lonDeg = lon;
            }

            this.lonDec = this.deg2dec(lon, this.MAX_LON);

            break;
    }

    switch (typeof(lat)) {

        case 'number':

            this.latDeg = this.dec2deg(lat, this.MAX_LAT);
            this.latDec = lat;

            break;

        case 'string':

            if (this.decode(lat)) {
                this.latDeg = lat;
            }

            this.latDec = this.deg2dec(lat, this.MAX_LAT);

            break;

    }
};

GeoPoint.prototype = {

    CHAR_DEG: "\u00B0",
    CHAR_MIN: "\u0027",
    CHAR_SEC: "\u0022",
    CHAR_SEP: "\u0020",

    MAX_LON: 180,
    MAX_LAT: 90,

    // decimal
    lonDec: NaN,
    latDec: NaN,

    // degrees
    lonDeg: NaN,
    latDeg: NaN,

    dec2deg: function (value, max) {

        var sign = value < 0 ? '-' : '';
        var abs = Math.abs(Math.round(value * 1000000));

        if (abs > (max * 1000000)) {
            return NaN;
        }

        var dec = abs % 1000000 / 1000000;

        var deg = (Math.floor(abs / 1000000) < 10) ? '0' + Math.floor(abs / 1000000) : Math.floor(abs / 1000000);

        var minDec = (dec * 60) < 10 ? '0' + (dec * 60) : (dec * 60);
        minDec = minDec.toString()+"0000";
        minDec = minDec.substring(0,7);

        var result = "";

        result += sign+deg;
        result += this.CHAR_DEG;
        result += this.CHAR_SEP;
        result += minDec;
        result += this.CHAR_MIN;
        result += this.CHAR_SEP;

        return result;

    },

    deg2dec: function (value) {

        var matches = this.decode(value);
        var strMin;
        if (!matches) {
            return NaN;
        }

        var deg = parseInt(matches[0]);
        var min = parseFloat(matches[1]);

        // var sign = deg < 0 ? -1 : 1;
        var sign = deg < 0 ? "-" : "";

        deg = Math.abs(deg);

        if (isNaN(deg) || isNaN(min)) {
            return NaN;
        }

        if (deg < 10){
            deg = "0" + deg;
        }

        if((min / 60.0).toString().length < 8){
            strMin = (min / 60.0).toString()+"000000";
            strMin = strMin.substring(2,8);
        }else {
            strMin = (min / 60.0).toString().substring(2,8);
        }

        return sign + deg + "."+ strMin;

    },

    decode: function (value) {

        var valores;

        // console.log("valor : " + value.toString());
        valores = value.toString().split(' ');

        valores[0] = valores[0].replace("°","");
        //valores[1] = valores[1].replace("'","");

        return valores;
    },

    getLonDec: function () {
        return this.lonDec;
    },

    getLatDec: function () {
        return this.latDec;
    },

    getLonDeg: function () {
        return this.lonDeg;
    },

    getLatDeg: function () {
        return this.latDeg;
    }

};

