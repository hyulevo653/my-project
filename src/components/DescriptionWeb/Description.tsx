import React from 'react'

export default function Description() {
  return (
    <div className="flex flex-col md:flex-row ">
    <div className="flex-1 p-8 flex items-center justify-center">
      <div className="text-start md:text-left">
        <h2 className="text-3xl font-bold mb-4">Mô Tả Sản Phẩm</h2>
        <p className="text-lg">
          Đây là phần mô tả của sản phẩm hoặc dịch vụ. Bạn có thể cung cấp thông tin chi tiết về sản phẩm,
          bao gồm các tính năng, lợi ích, và bất kỳ thông tin quan trọng nào khác mà bạn muốn khách hàng biết.
        </p>
      </div>
    </div>
    <div className="flex-1 p-8 flex items-center justify-center">
      <img
        src="https://sapchieunguadongky.com/wp-content/uploads/2021/04/4-1-scaled.jpg"
        alt="Mô tả hình ảnh"
        className="w-full h-auto object-cover"
      />
    </div>
  </div>
  )
}
