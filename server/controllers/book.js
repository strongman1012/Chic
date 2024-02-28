import Service from "../models/Service.js";
import Category from "../models/Category.js";
import Staff from "../models/Staff.js";
import Book from "../models/Book.js";

export const placeOrder = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            phoneNumber,
            cartData,
            addNote,
            promoCode,
        } = req.body;


        for (var i = 0; i < cartData.length; i++) {
            let bookname = cartData[i].bookname;
            let Tprice = cartData[i].Tprice;
            let Lprice = cartData[i].Lprice;
            let Nprice = cartData[i].Nprice;
            let duration = cartData[i].duration;
            let bookingTime = cartData[i].bookingTime;
            let catalogList = cartData[i].catalogList;
            let message = cartData[i].message;
            let instagramUserName = cartData[i].instagramUserName;
            let email = cartData[i].email;
            let serviceId = cartData[i].serviceId;
            let userId = cartData[i].userId;

            let newPlaceOrder = new Book({
                bookname,
                Tprice,
                Lprice,
                Nprice,
                duration,
                bookingTime,
                catalogList,
                message,
                instagramUserName,
                email,
                serviceId,
                userId,
                firstName,
                lastName,
                phoneNumber,
                addNote,
                promoCode
            })
            await newPlaceOrder.save();
        }

        res.status(200).json("success");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find({});
        res.status(200).json(categories);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getServices = async (req, res) => {
    try {
        const services = await Service.find({});
        res.status(200).json(services);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

export const getStaffs = async (req, res) => {
    try {
        const staffs = await Staff.find({});
        res.status(200).json(staffs);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};