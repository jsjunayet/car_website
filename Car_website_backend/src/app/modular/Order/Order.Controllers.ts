import { Request, Response } from 'express';
import { AllOrderServices } from './Oder.services';
import { catchAsync } from '../../utilitiy/catchAsync';
import sendResponse from '../../utilitiy/sendResponse';
const CreateOrderInMonogdb= catchAsync(async (req, res) => {
  const order = await AllOrderServices.CreateOrderService(req.body, req.ip!);

  sendResponse(res, {
    success: true,
    message: "Order placed successfully",
    statusCode: 201,
    data: order,
  });
});

const CalculateRevenueInMongodb = async (req: Request, res: Response) => {
  try {
    const data = await AllOrderServices.CalculateRevenueService();
    res.status(200).json({
      message: 'Revenue calculated successfully',
      status: true,
      data: {
        totalRevenue: data,
      },
    });
  } catch (err) {
    res.status(500).json({
      message: 'Revenue calculated failed',
      status: false,
      data: err,
    });
  }
};
const verifyPayment = catchAsync(async (req, res) => {
  const order = await AllOrderServices.verifyPayment(req.query.order_id as string);

   sendResponse(res, {
    success: true,
    message: "Order verified successfully",
    statusCode: 201,
    data: order,
  });
});
const getAllorder = catchAsync(async (req, res) => {
  const order = await AllOrderServices.getAllorder();

   sendResponse(res, {
    success: true,
    message: "All Order successfully",
    statusCode: 200,
    data: order,
  });
});
const deletedorder = catchAsync(async (req, res) => {
  const order = await AllOrderServices.deletedorder(req.params.id);

   sendResponse(res, {
    success: true,
    message: " Order Deleted successfully",
    statusCode: 200,
    data: order,
  });
});

export const AllOrderControllers = {
  CreateOrderInMonogdb,
  CalculateRevenueInMongodb,
  verifyPayment,
  getAllorder,
  deletedorder
};
