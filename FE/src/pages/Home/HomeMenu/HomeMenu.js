import React, { useEffect, useState } from 'react';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export default function Demo() {
    
        const [tabPos, setTabPosition] = useState('left');
      
        useEffect(() => {
          const handleResize = () => {
            if (window.innerWidth <= 768) {
              setTabPosition('top');
            } else {
              setTabPosition('left');
            }
          };
      
          handleResize(); // Set initial tab position
      
          window.addEventListener('resize', handleResize);
          return () => {
            window.removeEventListener('resize', handleResize);
          };
          }, []);
        console.log(tabPos)
        return (
            <>
                <Tabs tabPosition={tabPos} className='p-4'>
                    <TabPane tab={<img src="https://picsum.photos/200" className="rounded-full" width="50" />} key="1">
                        <p className='md:text-lg text-justify'>
                        Mình vừa mới mua iPhone 14 Pro Max tại website và rất hài lòng với chất lượng sản phẩm cũng như dịch vụ của website. Điện thoại được đóng gói cẩn thận, giao hàng nhanh chóng và đúng hẹn. Sản phẩm đúng như mô tả trên website, chất lượng rất tốt, màn hình sắc nét, camera chụp ảnh đẹp. Mình sẽ tiếp tục ủng hộ website trong thời gian tới.
                        </p>
                    </TabPane>
                    <TabPane tab={<img src="https://picsum.photos/200" className="rounded-full" width="50" />} key="2">
                        <p className='md:text-lg text-justify'>
                        Mình là một khách hàng lâu năm của website. Mình rất hài lòng với chất lượng sản phẩm cũng như dịch vụ của website. Điện thoại iPhone luôn có giá tốt nhất thị trường, giao hàng nhanh chóng và chính sách bảo hành chu đáo. Nhân viên tư vấn nhiệt tình, luôn sẵn sàng giải đáp thắc mắc của khách hàng. Mình sẽ tiếp tục ủng hộ website trong thời gian tới.
                        </p>
                    </TabPane>
                    <TabPane tab={<img src="https://picsum.photos/200" className="rounded-full" width="50" />} key="3">
                        <p className='md:text-lg text-justify'>
                        Mình rất hài lòng với dịch vụ mua hàng tại website. Website có nhiều mẫu mã điện thoại iPhone đa dạng, giá cả hợp lý. Mình đã mua iPhone 13 Pro tại website và rất hài lòng với chất lượng sản phẩm. Điện thoại được đóng gói cẩn thận, giao hàng nhanh chóng và đúng hẹn. Mình sẽ tiếp tục ủng hộ website trong thời gian tới.
                        </p>
                    </TabPane>
                </Tabs>
            </>
        );
}