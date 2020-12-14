const Requests = require("../models/requests");
const Bookings = require("../models/bookings");
var mongoose = require('mongoose');

class BookingDataController {
    constructor() {
    }
    writeRequest(data) {
            let request = new Requests( {
                _id: new mongoose.Types.ObjectId(),
                userid: data.userid,
                requestid:  data.requestid,
                dentistid:  data.dentistid,
                issuance: data.issuance,
                time: data.time
            })
            request.save()
    }
    writeBooking(data) {
        let booking = new Bookings( {
            _id: new mongoose.Types.ObjectId(),
            userid: data.userid,
            requestid:  data.requestid,
            dentistid:  data.dentistid,
            issuance: data.issuance,
            time: data.time
        })
        booking.save()
    }
    deleteData(data) {
        Requests.findOneAndDelete({userid: data.userid},function (err, deleted){
            if (err) {
                console.log(err)
            }
        });
    }

    async readData() {
       return Requests.find();
    }

}
module.exports.BookingDataController = BookingDataController