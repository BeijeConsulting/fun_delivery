

export const TRANSLATIONS_BACKOFFICE = {
    screens: {
        common_screens: {
            order: "Order",
            address: "Address"
        },
        login: {
            partner: "Want to become our partner?",
            title: "Log in to your restaurant",
            forgot_password: "Forgot password?",
            register_now: "Register now",
            error: "Wrong email or password"
        },
        forgot_password:{
            title:"Forgot Password?",
            partner:"Are you already our partner?",
            login:'Log in now.',
            error: "Wrong email or password"
        },
        registration: {
            title: "Register your restaurant",
            your_data: "Your data",
            your_restaurant: "Your restaurant",
        },
        my_orders: {
            your_orders: "Your orders",
            number_of_order: "Order #",
            status: "Status",
        },
        incoming_orders: {
            title: "Incoming orders",
            ordered_text: "placed an order",
        },
        single_order: {
            ordered_food: "Ordered food",
            customer_name: "Customer name",
            date: "Date",
            price: "Price",
            quantity: "Quantity",
            total: "TOTAL",
            approve: "Approve",
            dont_approve: "Don't approve"
        },
        my_menu:{
            title:"My Menu",
        },
        profile: {
            profile: 'PROFILE',
            welcome: 'Welcome',
            edit_data: 'Edit profile data',
            save_data: 'Save profile data',
            your_data: 'Your data',
            free_shipping: 'Free shipping',
            first_name: 'First name',
            last_name: 'Last name',
            your_restaurant: 'Your restaurant',
            restaurant_name: 'Restaurant name',
            telephone: 'Telephone number',
            address: 'Address',
            cap: 'Postal code',
            state: 'State',
            city: 'City',
            vat: 'VAT',
            categories: 'Category',
            discounts: 'Discounts',
            restaurant_description: 'Restaurant description'
        },
        plates:{
            title:'Plates list',
            new_plate:'New Plate'
        }
    },

    components: {
        sidebar:{
            profile:'Profile',
            my_menu: 'My Menu',
            my_orders: 'My Orders',
            incoming_orders: 'Incoming'
        },
        button: {
            login: "LOG IN",
            register: "REGISTER",
            logout:'Logout'
        },
        inputbox: {
            restaurant_name: "Restaurant name",
            vat: "VAT",
            confirm_password:"Confirm password"
        },
        timeline: {
            title: {
                approved: "Approved",
                preparing: "Preparing",
                delivering: "Delivering",
                delivered: "Delivered"
            },
            confirm_to_continue: "Are you sure?",
            next_step: "Next step",
            cancel: "Cancel",
            next: "Next",
            complete_order: "Complete",
            success_message: "Order completed"
        },
        back : "Back"
    },

    useful_constants: {
        restaurant_categories: {
            title_component: 'Categories',
            pizza: 'Pizza',
            poke: 'Pokè',
            sushi: 'Sushi',
            mexican: 'Mexican',
            italian: 'Italian',
            hamburger: 'Hamburger',
            other: 'Other'
        },
        countries: {
            titleComponent: "Country",
            italy: "Italy",
            england: "England"
        },

        order_status: {
            all: "All",
            approved: "🟣 Approved",
            completed: "🟢 Completed",
            delivering: "🟡 Delivering",
            preparing: "🟠 Preparing",
            pending: "🔵 To be approved",
            rejected: "🔴 Rejected",
            error: "Error"
        },
        my_menu_categories:{
            first_course: 'First course',
            second_course: 'Second course',
            sidedish: 'Side dish',
            sandwich:'Sandwich',
            mexican:'Mexican',
            other:'Other'
        }
    }
}