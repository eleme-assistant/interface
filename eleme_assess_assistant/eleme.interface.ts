export namespace Eleme {

    /**
     * 评分
     */
    export interface RatingScore {
        /**
         * 高于周围商家
         */
        compare_rating: number,
        /**
         * 菜品评价
         */
        food_score: number,
        /**
         * 积极性评价
         */
        positive_rating: number,
        /**
         * 餐厅ID
         */
        restaurant_id: number,
        /**
         * 服务评价
         */
        service_score: number,
        /**
         * 综合评价
         */
        star_level: number,
    }

}