import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, company, email } = body;
    if (!fullName || !company || !email) {
      return NextResponse.json(
        { error: "الاسم والشركة والبريد مطلوبة" },
        { status: 400 }
      );
    }
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "خطأ في المعالجة" },
      { status: 500 }
    );
  }
}
