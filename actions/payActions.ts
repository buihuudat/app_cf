import { payApi } from "../utils/api/payApi";

export const payActions = {
  payment: async (amount: number) => {
    try {
      const res = await payApi.payment(amount);
      return res.data;
    } catch (error) {
      throw error;
    }
  },
};
