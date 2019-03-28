import { FormControl } from "@angular/forms";

function regCheck(c: FormControl, reg: RegExp, name: string, message: string) {
    const match = reg.test(c.value);
    return !match ? {
        [name]: message
    } : null;
}
function norPointForImp(value: string) {
    if (value.length >= 10) {
        return false;
    } else if (!/^[0-9]+(\.[0-9]{1,5})?$/.test(value)) {
        return false;
    } else {
        return true;
    }
}
export const UNITTYPES = {
    'RES': ['R', 'K', 'M'],
    'CAP': ['pF', 'nF', 'uF', 'mF', 'F'],
    'OSCILLATOR': ['kHz', 'MHz'],
    'INDUCTOR': ['nH', 'uH', 'mH', 'H']
};
export default class MyValidator {
    static futsuuVdForImp(value: string): boolean {
        if (value.length >= 30) {
            return false;
        } else if (!/^[A-Za-z0-9\-\.()\/\\_:]+$/.test(value)) {
            return false;
        } else {
            return true;
        }
    }
    static quantityForImp(value: string): boolean {
        if (!/^(0|[1-9][0-9]*)$/.test(value)) {
            return false;
        } else {
            return true
        }
    }
    static preciseForImp(value: string): boolean {
        if (!['1%', '5%', '10%', '15%', '20%'].includes(value)) {
            return false;
        } else {
            return true;
        }
    }
    static norPointForImp(value: string) {
        if (value.length >= 10) {
            return false;
        } else if (!/^[0-9]+(.[0-9]{1,5})?$/.test(value)) {
            return false;
        } else {
            return true;
        }
    }
    static valAndReSetForImp(value: string, type, temp): boolean {
        console.log('type', type);
        UNITTYPES[type].forEach(unit => {
            const index = value.toUpperCase().search(unit.toUpperCase());

            if (index !== -1) {
                console.log('serch', value.slice(0, index));
                if (value.slice(0, index) && norPointForImp(value.slice(0, index))) {
                    if (temp['value']) {
                        if (unit.length === '2') {
                            temp['value'] = value.slice(0, index);
                            temp['unit'] = unit;
                        }
                    } else {
                        temp['value'] = value.slice(0, index);
                        temp['unit'] = unit;
                    }



                    console.log('$$$$$$$$$$4', temp);
                }
            }
        })
        if (JSON.stringify(temp) === '{}') {
            console.log('false?', temp)
            return false;
        } else {
            console.log('true?', temp)
            return true;
        }
    }

    static voltForImp(value: string): boolean {
        if (!/^[0-9]{1,3}$/.test(value)) {
            return false;
        } else {
            return true;
        }
    }

}