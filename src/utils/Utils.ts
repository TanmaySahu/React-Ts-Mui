


export class Utils {

    public static formatPhoneNumber(inputtext) {
        return inputtext.replace(/[^\d]/g, '')
    }

    public static validatePhoneNumber(inputtext) {
        if (Utils.phonenumber(inputtext) || Utils.phoneWithPlus(inputtext) || Utils.phoneWithBraces(inputtext)) {
            return true;
        }
        return false;
    }

    public static phonenumber(inputtxt) {
        var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
        if (inputtxt.match(phoneno)) {
            return true;
        }
        else {
            return false;
        }
    }


    public static phoneWithPlus(inputtxt) {
        var phoneno = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        if (inputtxt.match(phoneno)) {
            return true;
        }
        else {
            return false;
        }
    }

    public static phoneWithBraces(inputtxt) {
        var phoneno = /^(\([0-9]{3}\)\s*|[0-9]{3}\-)[0-9]{3}-[0-9]{4}$/;
        if (inputtxt.match(phoneno)) {
            return true;
        }
        else {
            return false;
        }
    }



}