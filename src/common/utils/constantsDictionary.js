import i18n from "../localization/i18n";

const constantsDictionary = {
    RESTAURANT_CATEGORIES: {
        titleComponent: i18n.t('backoffice.useful_constants.restaurant_categories.title_component'),
        pizza: i18n.t('backoffice.useful_constants.restaurant_categories.pizza'),
        poke: i18n.t('backoffice.useful_constants.restaurant_categories.poke'),
        sushi: i18n.t('backoffice.useful_constants.restaurant_categories.sushi'),
        mexican: i18n.t('backoffice.useful_constants.restaurant_categories.mexican'),
        italian: i18n.t('backoffice.useful_constants.restaurant_categories.italian'),
        hamburger: i18n.t('backoffice.useful_constants.restaurant_categories.hamburger'),
        other: i18n.t('backoffice.useful_constants.restaurant_categories.other'),
    },
    COUNTRIES: {
        titleComponent: i18n.t('backoffice.useful_constants.countries.titleComponent'),
        italy: i18n.t('backoffice.useful_constants.countries.italy'),
        england: i18n.t('backoffice.useful_constants.countries.england')
    },
    ORDER_STATUS: {
        all: i18n.t('backoffice.useful_constants.order_status.all'),
        completed: i18n.t('backoffice.useful_constants.order_status.completed'),
        delivering: i18n.t('backoffice.useful_constants.order_status.delivering'),
        preparing: i18n.t('backoffice.useful_constants.order_status.preparing'),
        confirmed: i18n.t('backoffice.useful_constants.order_status.confirmed'),
    },
    MY_MENU_CATEGORIES: {
        first_course: i18n.t('backoffice.useful_constants.my_menu_categories.first_course'),
        second_course: i18n.t('backoffice.useful_constants.my_menu_categories.second_course'),
        side_dish: i18n.t('backoffice.useful_constants.my_menu_categories.sidedish'),
        sandwiches: i18n.t('backoffice.useful_constants.my_menu_categories.sandwich'),
        mexican: i18n.t('backoffice.useful_constants.my_menu_categories.mexican'),
        other: i18n.t('backoffice.useful_constants.my_menu_categories.other')
    }
}

export default constantsDictionary