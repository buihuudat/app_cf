import {StyleSheet} from 'react-native';
import {
  black,
  dark,
  darkGreen,
  mainColor,
  thirColor,
} from '../../constants/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: black,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    textTransform: 'capitalize',
    color: mainColor,
  },

  wrapSwiper: {
    height: 400,
  },

  wrapImage: {height: '100%'},

  image: {
    resizeMode: 'cover',
    height: '100%',
  },

  content: {
    flex: 1,
    paddingHorizontal: 20,
  },

  productTitle: {
    fontWeight: '700',
    textAlign: 'left',
    fontSize: 30,
    color: black,
  },

  discount: {
    fontSize: 22,
    color: thirColor,
    fontWeight: '600',
  },
  priceDiscount: {
    fontSize: 18,
    fontWeight: '600',
    textDecorationLine: 'line-through',
  },

  productStar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  viewStar: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  textStar: {
    fontWeight: '600',
    color: dark,
    fontSize: 18,
  },

  viewPriceCount: {
    display: 'flex',
    flexDirection: 'row',
    paddingBottom: 5,
    justifyContent: 'space-between',
    textAlign: 'center',
  },
  price: {
    fontWeight: '800',
    fontSize: 30,
    color: mainColor,
  },

  upDown: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    gap: 10,
    padding: 5,
    borderRadius: 20,
    backgroundColor: '#EBFEE0',
  },
  upDownText: {
    fontSize: 20,
    color: mainColor,
    fontWeight: '600',
  },

  productShop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
  },
  shop: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 5,
  },
  shopImage: {
    width: 50,
    height: 50,
    resizeMode: 'cover',
  },
  shopName: {
    fontSize: 18,
    fontWeight: '600',
    color: 'white',
  },
  viewShopText: {
    fontSize: 12,
    fontWeight: '500',
    color: 'white',
    padding: 5,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: 'white',
  },

  viewDesc: {
    paddingTop: 20,
    paddingBottom: 100,
    display: 'flex',
    flexDirection: 'column',
  },
  viewDescTitle: {
    fontSize: 18,
    color: black,
    fontWeight: '700',
  },

  productActions: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    backgroundColor: black,
  },
  actionsContent: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  productReview: {
    display: 'flex',
    gap: 1,
  },
  iconReviews: {
    padding: 15,
    borderRadius: 50,
  },

  actionAddCart: {
    backgroundColor: mainColor,
    borderRadius: 50,
    padding: 15,
    paddingHorizontal: 20,
  },

  actionText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },

  productTag: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    paddingVertical: 5,
  },

  tag: {
    fontSize: 13,
    color: mainColor,
    paddingHorizontal: 3,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: mainColor,
    alignSelf: 'flex-start',
  },
});
