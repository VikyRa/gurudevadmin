import authReducer from './auth.reducers';
import { AddRoleReducer, AdminRoleReducer, AllAdminRoleReducer, updateRoleReducer } from './role.reducer';
import { combineReducers } from 'redux';
import { createUsers, getcallhistoryReducer, getuserChartReducer, getUserReducer, singleuserReducer, updateuserReducer } from './user.reducers';
import { getAstrologerReducer, createAstrologerReducer, singleAstrologerReducer, updateAstrologerReducer } from './astroloer.reducers';
import { addserviceReducer, deleteserviceReducer, getServiceReducer, serviceReducer, updateServiceReducer } from './service.reducer';
import { addBannerReducer, BannerReducer, deleteBannerReducer } from './banner.reducers';
import { addgetblogcatReducer, blogCategoryReducer, deleteblogCategoryReducer, getblogCategoryReducer, updateblogCategoryReducer } from './blogcategory.reducers';
import { addgetblogReducer, blogReducer, deleteblogReducer, getblogReducer, updateblogReducer } from './blog.reducers';
import { addcatReducer, deleteCategoryReducer, getCategoryReducer, listCategoryReducer, updateCategoryReducer } from './category.reducers';

import {addProductReducer, deleteProductReducer, getProductReducer, productlistReducer, updateProductReducer } from './product.reducers';

const rootReducer = combineReducers({
    auth: authReducer,
    // ROLE REDUCER START
    role: AllAdminRoleReducer,
    roleDetail: AdminRoleReducer,
    addrole: AddRoleReducer,
    updateRole: updateRoleReducer,
    // ROLE REDUCER STOP

    // USER REDUCER CODE START
    user: getUserReducer,
    createuser: createUsers,
    suser: singleuserReducer,
    userupdate: updateuserReducer,
    getcallh: getcallhistoryReducer,
    chartuser:getuserChartReducer,
    // USER REDUCER CODE STOP

    // ASTROLOGER REDUCER START
    astrologer: getAstrologerReducer,
    castrologer: createAstrologerReducer,
    sastrologer: singleAstrologerReducer,
    uastrologer: updateAstrologerReducer,
    // ASTROLOGER REDUCER STOP

    // service reducer start
    service: serviceReducer,
    addservice: addserviceReducer,
    deleteservice: deleteserviceReducer,
    getservice: getServiceReducer,
    updateservice: updateServiceReducer,
    // service reducer stop

    // for banner reducer start
    banner: BannerReducer,
    addbanner: addBannerReducer,
    deleteBanner: deleteBannerReducer,

    // blog category reducer start
    blogcategory: blogCategoryReducer,
    addgetblogcat: addgetblogcatReducer,
    deletegetblogcat: deleteblogCategoryReducer,
    getblogcat: getblogCategoryReducer,
    updatesgetblogcat: updateblogCategoryReducer,
    // blog category reducer stop


    // blog category reducer start
    blog: blogReducer,
    addblog: addgetblogReducer,
    deleteblog: deleteblogReducer,
    getblog: getblogReducer,
    updatesgetblog: updateblogReducer,
    // blog category reducer stop

    // CATEGORY REDUCER START
    listcategory:listCategoryReducer,
    addcategory:addcatReducer,
    deletecat:deleteCategoryReducer,
    getcategory:getCategoryReducer,
    updatecat:updateCategoryReducer,
    // CATEGORY REDUCER STOP


    // PRODUCT REDUCER START
    listproduct:productlistReducer,
    addproduct:addProductReducer,
    getproduct:getProductReducer,
    deleteproduct:deleteProductReducer,
    updateproduct:updateProductReducer
    // PRODUCT REDUCER STOP
});

export default rootReducer;