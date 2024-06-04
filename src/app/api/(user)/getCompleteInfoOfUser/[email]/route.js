import { NextResponse } from 'next/server';
// Adjust the import path as necessary
import { dbConnect } from '@/utils/dbConnect';
import { User } from '@/model/User';

export const GET = async (req, { params }) => {
  const { email } = params;

  try {
    await dbConnect();

    // Find the user and populate both PendingAppointments and MyAppointments
    const user = await User.findOne({ email })
      .populate("PendingAppointments")
      .populate("MyAppointments");

    if (!user) {
      return NextResponse.json({
        message: 'User not found',
        success: false,
      }, {
        status: 404,
      });
    }

    return NextResponse.json({
      message: 'User retrieved successfully',
      success: true,
      user: user,
    }, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: error.message,
      success: false,
    }, {
      status: 500,
    });
  }
};
