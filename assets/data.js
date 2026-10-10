/* ===== ข้อมูลที่แก้เองได้ / Editable data =====
   ใส่เฉพาะข้อมูลจริงที่ตรวจสอบแล้ว · Only add real, verified information.
   ถ้าปล่อยว่าง หน้าเว็บจะแสดงข้อความ "สอบถามแพ็กเกจ/รายการล่าสุด" แทน */

// แพ็กเกจอินเทอร์เน็ต / Internet packages  (internet.html)
// ตัวอย่าง: { provider:"ชื่อผู้ให้บริการ", name:"ชื่อแพ็กเกจ", mbps:500, price:599, note:"เงื่อนไข" }
// provider / code / speed (down/up Mbps) / months = contract length / price ฿ per month / note
// ที่มา: โบรชัวร์โปรโมชันที่ได้รับ (ดูรูปใน assets/img) · ตรวจราคาล่าสุดก่อนเสนอลูกค้า
window.INTERNET_PACKAGES = [
  { provider: "True Online MyPlan", code: "T1", speed: "300/300",   months: 12, price: 499 },
  { provider: "True Online MyPlan", code: "T2", speed: "500/500",   months: 12, price: 599 },
  { provider: "True Online MyPlan", code: "T2", speed: "500/500",   months: 24, price: 499 },
  { provider: "True Online MyPlan", code: "T3", speed: "1000/500",  months: 12, price: 699 },
  { provider: "True Online MyPlan", code: "T3", speed: "1000/500",  months: 24, price: 599 },
  { provider: "True Online MyPlan", code: "T4", speed: "1000/1000", months: 12, price: 859 },
  { provider: "True Online MyPlan", code: "T4", speed: "1000/1000", months: 24, price: 759 },
  { provider: "True Online MyPlan", code: "T5", speed: "1500/1000", months: 12, price: 1299, note: "Wi-Fi 7 + NOW ENT" },
  { provider: "True Online MyPlan", code: "T6", speed: "2000/1000", months: 12, price: 1399, note: "Wi-Fi 7 + NOW ENT" },
  { provider: "True Online MyPlan", code: "T7", speed: "500/500",   months: 24, price: 599, note: "TV Box + iQIYI free 24 mo" },
  { provider: "Broadband 24", code: "", speed: "300/300",  months: 12, price: 499 },
  { provider: "Broadband 24", code: "", speed: "500/500",  months: 24, price: 500 },
  { provider: "Broadband 24", code: "", speed: "500/500",  months: 12, price: 600 },
  { provider: "Broadband 24", code: "", speed: "1G/500",   months: 24, price: 600, note: "Best value" },
  { provider: "Broadband 24", code: "", speed: "1G/500",   months: 12, price: 700 },
  { provider: "Broadband 24", code: "", speed: "1G/1G",    months: 12, price: 1200 }
];
// หมายเหตุ True: ค่าแรกเข้า 400 บาท วันติดตั้ง (ลด 100 บาท 4 เดือน) · Add-on: Mesh WiFi 100, CCTV 99, SIM 120, TV Box NOW 180, Asian Combo 200 บาท/เดือน
window.INTERNET_NOTES = "True: entry fee 400 ฿ on install day, then 100 ฿ discount for 4 months · add-ons: Mesh WiFi 100 ฿, CCTV 99 ฿, Unlimited SIM 120 ฿, TV Box (NOW) 180 ฿, Asian Combo 200 ฿ per month";

// รายการคอนโด / Condo listings  (condo.html)
// ตัวอย่าง: { name:"ชื่อโครงการ", area:"ทำเล / BTS", type:"rent" หรือ "sale", price:"15,000 /เดือน", size:"35 ตร.ม.", beds:1, note:"หมายเหตุ", link:"" }
window.CONDOS = [];
