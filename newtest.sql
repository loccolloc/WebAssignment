-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2023 at 05:50 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `newtest`
--

-- --------------------------------------------------------

--
-- Table structure for table `aboutimg`
--

CREATE TABLE `aboutimg` (
  `id` int(50) NOT NULL,
  `img` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `aboutimg`
--

INSERT INTO `aboutimg` (`id`, `img`) VALUES
(1, 'https://plus.unsplash.com/premium_photo-1702226631881-72d0d0bfa05e?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'),
(2, 'https://images.unsplash.com/photo-1578112010316-b44c50d27b2b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D'),
(3, 'https://images.unsplash.com/photo-1638891759319-c89d072c4790?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D'),
(4, 'https://images.unsplash.com/photo-1541630010955-6966d6ce9178?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fHw%3D'),
(5, 'https://images.unsplash.com/photo-1678705543115-78279c55abc5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHx8'),
(6, 'https://images.unsplash.com/photo-1639148604856-0d8ffc69fa5f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEwfHx8ZW58MHx8fHx8');

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `id` int(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  `image` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`id`, `username`, `password`, `role`, `image`) VALUES
(49, 'loc', '123456', 'admin', 'https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg'),
(52, 'tamminh', '123456', 'user', 'https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg'),
(54, 'locloc', '123456', 'user', 'https://static.vecteezy.com/system/resources/previews/009/292/244/original/default-avatar-icon-of-social-media-user-vector.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `carousel`
--

CREATE TABLE `carousel` (
  `id` int(100) NOT NULL,
  `hinhAnh` varchar(160) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `carousel`
--

INSERT INTO `carousel` (`id`, `hinhAnh`) VALUES
(1, 'https://www.xtmobile.vn/vnt_upload/news/08_2019/19/iphone-12-pro-xtmobile_-banner.jpg'),
(2, 'https://www.bihouse.vn/img_data/images/842944434604-Apple-iPhone-15-Pro-lineup-hero-230912_Full-Bleed-Image.jpg.large.jpg'),
(3, 'https://storage.googleapis.com/tradeinn-images/images/landing-pages/appleNovetats-1.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id` int(50) NOT NULL,
  `ptitle` varchar(50) NOT NULL,
  `pprice` int(50) NOT NULL,
  `pkind` varchar(150) NOT NULL,
  `pimg` varchar(150) NOT NULL,
  `sl` int(50) NOT NULL,
  `username` varchar(150) NOT NULL,
  `p_id` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `ptitle`, `pprice`, `pkind`, `pimg`, `sl`, `username`, `p_id`) VALUES
(12563, 'iPhone 15 Pro', 28290000, 'iphone15', 'https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-blue-thumbnew-600x600.jpg', 3, 'locloc', 2),
(12578, 'iPhone 15 Pro Max', 33890000, 'iphone15', 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg', 1, 'tamminh', 1),
(12579, 'iPhone 15 Pro', 28290000, 'iphone15', 'https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-blue-thumbnew-600x600.jpg', 5, 'tamminh', 2);

-- --------------------------------------------------------

--
-- Table structure for table `commentdb`
--

CREATE TABLE `commentdb` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `comment` varchar(250) NOT NULL,
  `time` date NOT NULL,
  `productid` int(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `commentdb`
--

INSERT INTO `commentdb` (`id`, `username`, `comment`, `time`, `productid`) VALUES
(23, 'tamminh', 'san pham qua xau', '2023-12-10', 5),
(32, 'tamminh', 'sanpham qua te', '2023-12-11', 3),
(36, 'tamminh', 'ljjljljk', '2023-12-13', 1);

-- --------------------------------------------------------

--
-- Table structure for table `commentnews`
--

CREATE TABLE `commentnews` (
  `id` int(100) NOT NULL,
  `username` varchar(100) NOT NULL,
  `time` date NOT NULL,
  `newsid` int(100) NOT NULL,
  `comment` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `commentnews`
--

INSERT INTO `commentnews` (`id`, `username`, `time`, `newsid`, `comment`) VALUES
(6, 'tamminh', '2023-12-13', 2, 'joijljlk\n');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `id` int(50) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `message` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contact`
--

INSERT INTO `contact` (`id`, `name`, `email`, `message`) VALUES
(8, 'Phan Nguyễn Xuân Lộc', 'loc.phan2113971@hcmut.edu.vn', 'fsfsfsfsffsfff');

-- --------------------------------------------------------

--
-- Table structure for table `contactpage`
--

CREATE TABLE `contactpage` (
  `id` int(50) NOT NULL,
  `header` mediumtext NOT NULL,
  `content` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `contactpage`
--

INSERT INTO `contactpage` (`id`, `header`, `content`) VALUES
(1, 'Trải Nghiệm Cửa Hàng', 'Đến thăm cửa hàng của chúng tôi để trải nghiệm sự thú vị của việc mua sắm trực tiếp. Bạn sẽ được trải nghiệm sản phẩm, nhận sự tư vấn chuyên nghiệp và tham gia vào các sự kiện độc quyền chỉ có tại Phone Store.'),
(2, 'Kết Nối Với Chúng Tôi Trên Mạng Xã Hội', 'Hãy theo dõi chúng tôi trên các nền tảng mạng xã hội để cập nhật thông tin mới nhất, các sự kiện đặc biệt và ưu đãi hấp dẫn.'),
(3, 'Giờ Làm Việc', 'Thứ Hai - Thứ Sáu: 9:00 - 18:00\r\n\r\nThứ Bảy: 10:00 - 17:00\r\n\r\nChủ Nhật: Đóng cửa\r\n\r\nĐối với bất kỳ yêu cầu hỗ trợ nào sau giờ làm việc, xin vui lòng sử dụng form liên hệ trên trang web của chúng tôi hoặc gửi email, và chúng tôi sẽ liên hệ lại với bạn trong 24 giờ làm việc tiếp theo.'),
(4, 'Theo Dõi Đơn Hàng của Bạn', 'Đã đặt hàng? Theo dõi đơn hàng của bạn trực tiếp trên trang web của chúng tôi để biết trạng thái cập nhật và dự kiến giao hàng.'),
(5, 'Phản Hồi và Góp Ý', 'Chúng tôi trân trọng mọi phản hồi và sẵn lòng lắng nghe góp ý từ bạn. Mọi ý kiến đóng góp sẽ giúp chúng tôi cải thiện và phục vụ bạn tốt hơn.\r\n\r\nChúng tôi ở đây để hỗ trợ bạn - hãy liên hệ với chúng tôi bằng cách nào tiện lợi nhất cho bạn!'),
(6, 'Dịch Vụ Hỗ Trợ Kỹ Thuật:', 'Gặp vấn đề với iPhone của bạn? Đội ngũ kỹ thuật viên của chúng tôi sẽ giúp bạn xác định và giải quyết sự cố một cách nhanh chóng. Liên hệ với chúng tôi qua hotline hoặc gửi yêu cầu hỗ trợ kỹ thuật trực tiếp trên website.');

-- --------------------------------------------------------

--
-- Table structure for table `news`
--

CREATE TABLE `news` (
  `id` int(11) NOT NULL,
  `title` varchar(500) NOT NULL,
  `description` longtext NOT NULL,
  `content` longtext NOT NULL,
  `author` varchar(100) NOT NULL,
  `date` varchar(100) NOT NULL,
  `img` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `news`
--

INSERT INTO `news` (`id`, `title`, `description`, `content`, `author`, `date`, `img`) VALUES
(1, 'Khám Phá iPhone 14: Đột Phá Công Nghệ và Thiết Kế Mới', 'Chào mừng bạn đến với bản tin mới nhất của Phone Store, nơi chúng tôi chia sẻ thông tin độc quyền về những đột phá công nghệ từ Apple. Hãy cùng chúng tôi khám phá iPhone 14 - thiết bị mà Apple tuyên bố là bước tiến lớn nhất trong lịch sử iPhone. Từ hệ thống camera tiên tiến cho đến vi xử lý mạnh mẽ, iPhone 14 không chỉ là một chiếc điện thoại thông minh, nó là một trung tâm giải trí di động.', 'Ngoại hình sang chảnh, thiết kế chiếc tai nghe tròn trịa và nhỏ gọn hơn so với phiên bản tiền nhiệm. Housing được thiết kế theo dạng hiệu ứng giọt nước trông rất bắt mắt, ngoài ra khi đeo sẽ mang lại cảm giác dễ chịu, không hề bị cấn và bí tai.\r\n\r\nNgoại hình sang chảnh, thiết kế chiếc tai nghe tròn trịa và nhỏ gọn hơn so với phiên bản tiền nhiệm. Housing được thiết kế theo dạng hiệu ứng giọt nước trông rất bắt mắt, ngoài ra khi đeo sẽ mang lại cảm giác dễ chịu, không hề bị cấn và bí tai.\r\n\r\nNgoại hình sang chảnh, thiết kế chiếc tai nghe tròn trịa và nhỏ gọn hơn so với phiên bản tiền nhiệm. Housing được thiết kế theo dạng hiệu ứng giọt nước trông rất bắt mắt, ngoài ra khi đeo sẽ mang lại cảm giác dễ chịu, không hề bị cấn và bí tai.\r\n\r\nNgoại hình sang chảnh, thiết kế chiếc tai nghe tròn trịa và nhỏ gọn hơn so với phiên bản tiền nhiệm. Housing được thiết kế theo dạng hiệu ứng giọt nước trông rất bắt mắt, ngoài ra khi đeo sẽ mang lại cảm giác dễ chịu, không hề bị cấn và bí tai.\r\n\r\nNgoại hình sang chảnh, thiết kế chiếc tai nghe tròn trịa và nhỏ gọn hơn so với phiên bản tiền nhiệm. Housing được thiết kế theo dạng hiệu ứng giọt nước trông rất bắt mắt, ngoài ra khi đeo sẽ mang lại cảm giác dễ chịu, không hề bị cấn và bí tai.\r\n\r\nNgoại hình sang chảnh, thiết kế chiếc tai nghe tròn trịa và nhỏ gọn hơn so với phiên bản tiền nhiệm. Housing được thiết kế theo dạng hiệu ứng giọt nước trông rất bắt mắt, ngoài ra khi đeo sẽ mang lại cảm giác dễ chịu, không hề bị cấn và bí tai.', 'Phan Nguyễn Xuân Lộc', '11/12/2023', 'https://cafefcdn.com/203337114487263232/2023/12/9/iphone-2024-1702129331497-17021293322031007713275.jpeg'),
(2, 'Không cần tốn tiền, người dùng iPhone đời cũ sắp được \"lên đời\" iPhone 15 theo cách đặc biệt', '\r\nApple được cho là sẽ tính năng vốn chỉ có trên dòng iPhone 15 đến với các mẫu iPhone cũ hơn thông qua bản cập nhật iOS sắp tới.', 'Apple cho biết iOS 17.2 sắp tới sẽ \"hỗ trợ bộ sạc Qi2 cho tất cả các mẫu iPhone 13 và iPhone 14\". Điều này sẽ cho phép người dùng iPhone cũ có thể tận dụng tốc độ sạc không dây lên đến 15W bằng phụ kiện sạc không dây Qi2 mà không cần nâng cấp lên iPhone 15.\r\n\r\nGhi nhận của 9to5Mac cho thấy, phiên bản iOS 17.2 RC sẽ mang Qi2 đến tất cả các mẫu iPhone 13 và 14. Dù đã hỗ trợ MagSafe trước đó nhưng các mẫu iPhone đời cũ này chỉ hỗ trợ sạc không dây tối đa 7,5W khi sử dụng các phụ kiện bên thứ ba thay vì 15W nếu sử dụng bộ sạc MagSafe của Apple.\r\nVề Qi2, đây là phiên bản tiếp theo của chuẩn sạc không dây Qi phổ biến. Giống như hệ thống sạc MagSafe độc quyền của Apple, Qi2 cho phép sạc không dây từ tính với khả năng hút dính bằng nam châm và công suất sạc cũng mạnh mẽ hơn với 15W.\r\n\r\nWireless Power Consortium cho biết, các bộ sạc không dây sử dụng chuẩn Qi2 sẽ được tung ra thị trường vào kỳ nghỉ lễ cuối năm. Hiện đã có hơn 100 thiết bị được thử nghiệm hoặc đang chờ xem xét chứng nhận chuẩn sạc Qi2 trước khi được mở bán. Các thương hiệu đầu tiên sắp mở bán các phụ kiện Qi2 sẽ là Anker, Mophie và Belkin.', 'Phan Nguyễn Xuân Lộc', '11/12/2023', 'https://cafefcdn.com/203337114487263232/2023/12/9/iphone-14-2025-1702129332815-17021293331852134714127.jpeg'),
(3, 'Người dân quốc gia này rất lạ: Mua điện thoại là chỉ chọn iPhone hoặc Samsung - Hãng khác không cần biết', 'Mặc dù là thị trường di động hàng đầu thế giới, người dân quốc gia này đại đa số chỉ mua iPhone hoặc điện thoại của Samsung. Vì sao lại như vậy?', 'Samsung và Apple là hai hãng sản xuất smartphone hàng đầu trên thế giới. Ở các quốc gia khác thường có ít nhất một thương hiệu nổi tiếng (như Xiaomi, Oppo, OnePlus…) có thể sánh vai với hai gã khổng lồ này. Nhưng điều kỳ lạ là ở Mỹ lại không như vậy.\r\n\r\nTheo Washington Post, người Mỹ đang mắc kẹt trong “lối mòn mua sắm” điện thoại thông minh. Người dân nước này từ trước đến nay gần như chỉ mua điện thoại từ hai tên tuổi lớn là Apple và Samsung, không quan tâm đến thiết bị của các hãng khác.\r\n\r\nTheo các số liệu, khoảng 3/4 số điện thoại thông minh mà người Mỹ mua là iPhone hoặc các mẫu của Samsung. Các thương hiệu khác gần như mất tăm. Không có tên tuổi nào chiếm thị phần ở quá mức 8%.\r\n\r\nCâu chuyện như vậy đã tồn tại trong nhiều năm. Khi một người Mỹ có ý định sắm điện thoại mới, rất dễ để biết lựa chọn của họ là gì.\r\n\r\nTại sao thị trường điện thoại thông minh của Mỹ lại nhàm chán và dễ đoán đến vậy?\r\n\r\nCâu trả lời đến từ cách mà người dân nước này mua điện thoại và nơi họ mua.', 'Phan Nguyễn Xuân Lộc', '11/12/2023', 'https://cafefcdn.com/thumb_w/640/203337114487263232/2023/12/8/avatar1702044972635-1702044973131442442835-0-43-523-880-crop-17020450229651001441271.jpeg'),
(4, 'Vì sao nên tắt nguồn điện thoại 5 phút mỗi ngày?', 'Các chuyên gia khuyên bạn nên tắt điện thoại 5 phút mỗi ngày. Điều này có thể làm giảm nguy cơ điện thoại của bạn bị hack một cách hiệu quả.', 'Ngày nay, điện thoại là thiết bị cá nhân mang đến nhiều lợi ích, không chỉ phục vụ mục đích nghe gọi của người dùng mà còn giúp họ kết nối, sử dụng các tiện ích khác.\r\n\r\nTuy nhiên, điện thoại cũng rất dễ bị kẻ xấu xâm nhập và ảnh hưởng đến quyền lợi và sự riêng tư của chủ sở hữu do đó việc bảo vệ, bảo mật điện thoại di động là đặc biệt quan trọng,\r\n\r\nChuyên gia Priyadarsi Nanda (Australia) cho biết, nhiều người dùng điện thoại thường không nhận ra rằng một số ứng dụng có thể đang chạy ẩn và việc tắt điện thoại thường xuyên có thể ngăn chặn hoặc buộc tắt phần mềm gián điệp, phần mềm độc hại khác đang chạy ẩn.\r\n\r\nTrước đây, Cơ quan An ninh Quốc gia Hoa Kỳ (NSA) đã đưa ra khuyến cáo, người dùng nên tắt và khởi động lại điện thoại của mình ít nhất một lần một tuần.\r\n\r\nMặc dù có báo cáo cho rằng biện pháp này có thể không hiệu quả lắm đối với phần mềm gián điệp có độ tinh vi cao như Pegasus của NSO, nhưng người dùng vẫn được khuyên nên thực hiện bước này để cải thiện bảo mật điện thoại của mình.', 'Phan Nguyễn Xuân Lộc', '11/12/2023', 'https://cafefcdn.com/zoom/260_163/203337114487263232/2023/12/5/avatar1701774861720-1701774862466775451583.jpg'),
(5, 'Lần đầu lộ diện sau 15 năm: Đây là \"bộ não thiên tài\" đã giúp iPhone quyến rũ cả tỷ người trên hành tinh', 'Lần đầu tiên công chúng được nhìn thấy hình ảnh bên phòng nghiên cứu chip của Apple, nơi tạo ra iPhone và những thiết bị công nghệ đỉnh cao.', 'Giá trị của Apple tăng vọt trong hai thập kỷ qua được thúc đẩy bởi loạt thiết bị tiêu dùng mang tính biểu tượng. Bắt đầu với iPod và iMac. Sau đó là iPhone và iPad. Và gần đây hơn là Apple Watch và AirPods.\r\n\r\nTheo thống kê, có hơn 1 tỷ chiếc iPhone đang hoạt động trên thế giới và bí quyết đứng đằng sau sự thành công của chiếc điện thoại vĩ đại này là những kỹ sư thiên tài của Apple.\r\n\r\nLần đầu lộ diện﻿\r\n\r\nTại trụ sở chính ở Thung lũng Silicon, trong một căn phòng có vài trăm cỗ máy hoạt động và những kỹ sư mặc áo khoác nghiên cứu, Apple đang thiết kế những con chip cung cấp sức mạnh cho những sản phẩm phổ biến nhất của hãng.\r\n\r\nRa mắt lần đầu tiên trên iPhone 4 vào năm 2010, cho đến thời điểm hiện tại, tất cả máy tính Mac mới đều tích hợp con chip “cây nhà lá vườn” do hãng phát triển, chấm dứt hơn 15 năm phụ thuộc vào Intel.\r\n\r\n“Một trong những thay đổi sâu sắc nhất, nếu không muốn nói là lớn nhất ở Apple, chắc chắn là cách chúng tôi đưa các công nghệ tự phát triển vào trong các sản phẩm của mình suốt 20 năm qua. Và tất nhiên, đứng đầu danh sách chính là chip xử lý”, John Ternus, người đứng đầu mảng kỹ thuật phần cứng của Apple cho biết.\r\n\r\nCNBC đã có chuyến thăm trụ sở làm việc của Apple ở Cupertino, California, lần đầu tiên được ghi lại hình ảnh bên những phòng nghiên cứu chip của công ty.\r\n\r\n“Chúng tôi có hàng nghìn kỹ sư. Nhưng nếu nhìn vào danh mục chip, thực sự rất tinh gọn và hiệu quả”, Johny Srouji, trưởng bộ phận thiết kế chip của Apple chia sẻ.\r\n\r\nKhông giống như các nhà sản xuất chip truyền thống, Apple không sản xuất chip cho các công ty khác.\r\n\r\n“Vì không bán chip ra bên ngoài nên chúng tôi tập trung vào sản phẩm. Điều đó cho phép tự do tối ưu hóa và kiến trúc có thể mở rộng để tái sử dụng các phần giữa các sản phẩm khác nhau”.\r\n\r\n“Trái tim” làm nên sức mạnh của iPhone\r\n\r\nSrouji đến Apple vào năm 2008 để lãnh đạo một nhóm nhỏ gồm 40 hoặc 50 kỹ sư thiết kế chip riêng cho iPhone. Một tháng sau khi anh gia nhập, Apple mua PA Semiconductor, công ty khởi nghiệp gồm 150 người, với giá 278 triệu USD.\r\n\r\nHai năm sau khi mua lại, Apple tung ra con chip đầu tiên, A4, tích hợp trong iPhone 4 và iPad đời đầu.\r\n\r\nSrouji cho biết: “Chúng tôi đã xây dựng cái được gọi là kiến trúc bộ nhớ hợp nhất có thể mở rộng trên các sản phẩm. Chúng tôi xây dựng một kiến trúc mà bạn bắt đầu với iPhone, nhưng sau đó mở rộng nó sang iPad, kế tiếp là đồng hồ và cuối cùng là Mac”.\r\n\r\nĐội ngũ phát triển chip của Apple lớn mạnh lên tới hàng nghìn kỹ sư làm việc tại các phòng nghiên cứu trên khắp thế giới, bao gồm cả ở Israel, Đức, Áo, Anh và Nhật Bản.', 'Phan Nguyễn Xuân Lộc', '11/12/2023', 'https://cafefcdn.com/zoom/260_163/203337114487263232/2023/12/4/avatar1701697489144-17016974895511837919534.png'),
(6, 'Vì một lỗi thuật toán chụp ảnh, cô dâu giật mình hoảng hốt vì \"bức ảnh ma\" trong iPhone', 'Có thể nói, thuật toán chụp ảnh trên iPhone đã \"uốn cong thực tế\" khiến cô dâu trong bức ảnh cũng giật mình khi nhìn lại.', 'Như thói quen thường thấy, một phụ nữ người Anh khi đang thử váy cưới đã tiện tay chụp lại bức ảnh của mình trong gương. Nhưng khi nhìn lại bức ảnh vừa chụp, cô giật mình nhận ra mình như đang sống trong một thế giới ma trận khi các hình ảnh phản chiếu lại không khớp nhau. Nhưng hóa ra, không có gì bí ẩn trong bức ảnh này cả.\r\n\r\nNhờ các tiến bộ công nghệ về thuật toán xử lý, nhiếp ảnh trên điện thoại đã tiến một bước dài để vượt qua các giới hạn về ánh sáng và cảm biến. Mỗi khi bạn ấn vào nút chụp ảnh trên iPhone hay các smartphone khác, hàng tỷ thao tác sẽ được bộ xử lý trên thiết bị thực hiện gần như ngay lập tức để đưa ra một bức ảnh mà bạn ưng ý. Thế nhưng đây chính là nguồn cơn cho \"bức ảnh ma\" của cô gái nói trên.\r\n\r\nBức ảnh nói trên là của nữ diễn viên hài người Anh Tessa Coates được cô chụp lại khi đang thử váy cưới và đăng lên PetaPixel. Trong bức ảnh có hình phản chiếu của cô ở 2 tấm gương khác nhau, nhưng điều khiến cô kinh ngạc là sự khác nhau giữa hình ảnh của cô và hình phản chiếu trong 2 tấm gương.\r\n\r\nTrong khi một hình phản chiếu cho thấy cô đang buông thõng 2 tay xuống, một hình phản chiếu khác lại thấy cô đang để 2 tay trước bụng, trong khi hình ảnh thật lại là tay trái thả xuống còn tay còn lại để trước bụng. Coates khẳng định bức ảnh này không hề trải qua photoshop hay được chỉnh sửa mà hoàn toàn do iPhone của cô tạo ra. \r\n\r\nTrên thực tế đây là một lỗi trong thuật toán nhiếp ảnh của Apple. Camera không nhận ra đây là các hình ảnh phản chiếu trong gương, thay vào đó nó xem các phiên bản của Coates trong gương như những người khác nhau xuất hiện trong khung hình.\r\n\r\nHơn thế nữa, Coates đã xoay người một chút khi chụp bức ảnh này ở chế độ panorama, do vậy, khi ấn nút chụp ảnh, hàng loạt bức ảnh đã được ghi lại ngay tức khắc. Thuật toán của Apple ghép nối các bức ảnh này lại với nhau, chọn ra các phiên bản ưng ý nhất khi đối chiếu về mức độ bão hòa, độ tương phản, chi tiết và độ nhòe của bức ảnh.\r\n\r\nKết quả cuối cùng đáng nhẽ sẽ là bức ảnh chân thực nhất, đẹp nhất của khoảnh khắc đó thế nhưng vì sự hiện diện của những chiếc gương, thuật toán đã nhận diện nhầm các chủ thể xuất hiện trong ảnh và tạo nên bức ảnh ma như trên. Thay vì hiển thị hình ảnh Coates được phản chiếu trong gương, hình ảnh cuối cùng lại tạo ra 3 phiên bản Coates với các động tác khác nhau.', 'Phan Nguyễn Xuân Lộc', '11/12/2023', 'https://cafefcdn.com/zoom/260_163/203337114487263232/2023/12/4/avatar1701700849390-1701700850447570549729.jpeg'),
(8, 'Cách cài đặt quyền riêng tư trên iPhone', 'Màn hình quyền riêng tư iPhone bao gồm Dịch vụ Định vị, Danh bạ và Lịch mà các ứng dụng có thể truy cập được, cài đặt quyền riêng tư giúp bảo mật thông tin tốt hơn.', 'Để cài đặt quyền riêng tư, bạn nhấn vào ứng dụng Cài đặt -> chọn Quyền riêng tư. Mỗi khi bạn cài ứng dụng mới hãy truy cập vào quyền riêng tư để xem ứng dụng đó có muốn truy cập vào các thông tin cá nhân của bạn hay không.\r\n\r\nDữ liệu vị trí trên iPhone\r\n\r\nDịch vụ vị trí là tính năng GPS của iPhone hiển thị vị trí của bạn phục vụ việc chỉ đường, tìm kiếm các cửa hàng xung quanh… Dịch vụ Vị trí mang lại nhiều tính năng hữu ích nhưng những tính năng này cũng đồng thời theo dõi chuyển động của bạn.\r\n\r\nChính vì điều này nên bạn cần kiểm tra và cân nhắc dịch vụ nào thì bật và cái nào tắt để vừa tiết kiệm pin, vừa bảo vệ quyền riêng tư của bản thân. Trong màn hình Quyền riêng tư, chạm vào Dịch vụ Định vị để xem các tùy chọn.\r\n\r\nDịch vụ Định vị: Dịch vụ sử dụng GPS, Bluetooth và vị trí các cột phát sóng di động và điểm truy cập Wifi lấy nguồn từ cộng đồng để xác định vị trí gần đúng của bạn. Tắt nó đi để vô hiệu hóa GPS và nhiều tính năng cốt lõi của iPhone.\r\n\r\nChia sẻ vị trí của tôi: Là cách gửi vị trí GPS của thiết bị của bạn cho người khác, đây là giải pháp hữu ích giúp chia sẻ vị trí, tìm đường. Đối với các tùy chọn chia sẻ vị trí khác, hãy xem cách sử dụng Tìm bạn cho iPhone và iPad cũng như cách chia sẻ vị trí của bạn trên iPhone hoặc iPad. (Điều này áp dụng cho iOS 8 trở lên)\r\n\r\nỨng dụng: Là danh sách các ứng dụng có thể truy cập thông tin vị trí của bạn. Các ứng dụng này có thể sử dụng vị trí của bạn để thực hiện một số việc như giới thiệu các nhà hàng hoặc cửa hàng gần đó. Không phải ứng dụng nào cũng cần thiết phải biết vị trí của bạn để có thể hoạt động.\r\n\r\nĐể có thể kiểm soát quyền truy cập vào vị trí của bạn, hãy nhấn vào từng ứng dụng và chọn cho phép ứng dụng đó biết vị trí của bạn Luôn luôn, Không bao giờ hoặc Trong khi sử dụng ứng dụng.\r\n\r\nDịch vụ hệ thống: Dịch vụ hệ thống cấp thấp cung cấp nhiều tính năng cho iOS và các ứng dụng. Chúng cũng sử dụng thời lượng pin khi hoạt động ở chế độ nền và sử dụng dữ liệu.\r\n\r\nTrên đây là bài viết về cách cài đặt quyền riêng tư trên iPhone, mong rằng những thông tin này sẽ giúp ích cho các bạn.', 'Phan Nguyễn Xuân Lộc', '11/12/2023', 'https://cafefcdn.com/zoom/260_163/203337114487263232/2023/12/3/avatar1701563778759-1701563778885413075326-0-102-274-541-crop-17015638155521722731196.png'),
(9, 'Mẫu iPhone giá 10 triệu vén màn thiết kế đẹp mê ly, ngỡ ngàng khi xịn chẳng kém iPhone 15?', 'Thế hệ iPhone SE mới được cho là sẽ đại tu hoàn toàn khi Apple tìm cách tái sử dụng thiết kế của iPhone 14 cho mẫu iPhone giá rẻ tiếp theo.', 'Sau khi Apple trình làng dòng iPhone 15 vào tháng 9 năm nay, một báo cáo đã tiết lộ công ty đang phát triển biến thể SE mới là iPhone SE 4, theo BGR. \r\n\r\nDựa trên các nguồn tin, kênh YouTube công nghệ 4RMD đã phác hoạ nên bản dụng iPhone SE 4 với ngoại hình cực kỳ cuốn hút. \r\n\r\n', 'Phan Nguyễn Xuân Lộc', '11/12/2023', 'https://cafefcdn.com/zoom/260_163/203337114487263232/2023/11/26/avatar1701015992787-17010159935291141021003-0-41-310-536-crop-17010160250211580213386.jpg'),
(12, 'Đây là mức giá rẻ kỷ lục của iPhone 15 Pro Max tại Việt Nam: \"Rẻ hơn cả các loại rẻ\"', 'Sau giai đoạn khan hàng ban đầu, iPhone 15 Pro Max đã sẵn hàng và bắt đầu được giảm giá để kích cầu người tiêu dùng.', 'Loạt iPhone 15, trong đó bao gồm iPhone 15 Pro Max, chính thức được Apple mở bán tại Việt Nam vào ngày 29/09. Trong khoảng 1.5 tháng đầu tiên sau khi mở bán, do nhu cầu từ thị trường cao hơn gấp nhiều lần so với nguồn hàng được phân bổ, tình trạng khan hàng đã xảy ra. Người mua sẽ không thể nhận máy ngay mà buộc phải đặt cọc và đợi một khoảng thời gian nhất định. Trên thị trường \"chợ đen\", những chiếc iPhone 15 Pro Max cũng được giao dịch với mức giá cao hơn cả giá niêm yết của Apple.\r\n\r\nTuy nhiên, tình trạng khan hàng đã được Apple giải quyết ngay sau đó. Tính đến nay, toàn bộ các mẫu iPhone 15, trong đó bao gồm mẫu máy được quan tâm nhất là iPhone 15 Pro Max màu Titan tự nhiên, đã sẵn hàng. Người mua có thể dễ dàng sở hữu máy ở các hệ thống bán lẻ mà không cần phải đặt cọc hay chờ đợi.\r\n\r\nKhông chỉ sẵn hàng, hầu hết các hệ thống còn phải tiến hành giảm giá iPhone 15 để kích cầu tiêu dùng. Đặc biệt trong dịp Black Friday này, iPhone 15 Pro Max là một trong số những sản phẩm được các hệ thống tập trung điều chỉnh giá bán và quảng bá nhất.\r\n\r\nTham khảo nhiều hệ thống lớn như TGDĐ, CellphoneS, Viettel Store, Hoàng Hà Mobile…, người dùng chỉ cần phải bỏ ra khoảng 33 đến 33.5 triệu đồng là đã có thể sở hữu iPhone 15 Pro Max. Mức giá này rẻ hơn khoảng 1.5 đến 2 triệu đồng so với chỉ khoảng vài tuần trước đó.', 'Phan Nguyễn Xuân Lộc', '11/12/2023', 'https://cafefcdn.com/zoom/260_163/203337114487263232/2023/11/26/avatar1701007485440-17010074859142004718603-22-0-397-600-crop-17010075279011994630200.jpg'),
(16, 'messi', 'fsfsf', 'fsfsdff', 'sfsf', '2023-12-12', 'https://baohagiang.vn/file/4028eaa4679b32c401679c0c74382a7e/122023/1_20231212092258.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `id` int(11) NOT NULL,
  `ptitle` varchar(250) NOT NULL,
  `pprice` varchar(250) NOT NULL,
  `pkind` varchar(100) NOT NULL,
  `pimg` varchar(250) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`id`, `ptitle`, `pprice`, `pkind`, `pimg`) VALUES
(1, 'iPhone 15 Pro Max', '33890000', 'iphone15', 'https://cdn.tgdd.vn/Products/Images/42/305658/iphone-15-pro-max-blue-thumbnew-600x600.jpg'),
(2, 'iPhone 15 Pro', '28290000', 'iphone15', 'https://cdn.tgdd.vn/Products/Images/42/299033/iphone-15-pro-blue-thumbnew-600x600.jpg'),
(3, 'iPhone 15 Plus', '25790000', 'iphone15', 'https://cdn.tgdd.vn/Products/Images/42/303891/iphone-15-plus-hong-128gb-thumb-600x600.jpg'),
(4, 'iPhone 15', '22390000', 'iphone15', 'https://cdn.tgdd.vn/Products/Images/42/281570/iphone-15-xanh-thumb-600x600.jpg'),
(5, 'iPhone 14 Pro Max', '27490000', 'iphone14', 'https://cdn.tgdd.vn/Products/Images/42/251192/iphone-14-pro-max-tim-thumb-600x600.jpg'),
(6, 'iPhone 13', '16490000', 'iphone13', 'https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-pink-2-600x600.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `service`
--

CREATE TABLE `service` (
  `id` int(50) NOT NULL,
  `name` varchar(150) NOT NULL,
  `description` varchar(170) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `service`
--

INSERT INTO `service` (`id`, `name`, `description`) VALUES
(1, 'Sản phẩm Độc Quyền', 'Khám phá các phiên bản iPhone đặc biệt chỉ có tại Phone Store. Từ những chiếc iPhone màu sắc giới hạn đến những phiên bản cộng tác độc đáo với các thương hiệu nổi tiếng. '),
(2, 'Chất Lượng Đảm Bảo', 'Mỗi iPhone bán ra từ Phone Store đều trải qua quy trình kiểm định nghiêm ngặt để đảm bảo rằng bạn nhận được sản phẩm hoàn hảo nhất. Ngoài ra, chúng tôi còn cung cấp chính'),
(3, 'Ưu Đãi Đặc Biệt', 'Tham gia chương trình thành viên của Phone Store để nhận được các ưu đãi độc quyền và tiết kiệm chi phí cho mỗi lần mua sắm. Đăng ký bản tin của chúng tôi để không bỏ lỡ '),
(4, 'Chính Sách Bảo Hành Vượt Trội', 'Chúng tôi cung cấp chính sách bảo hành dài hạn và dịch vụ sửa chữa nhanh chóng, tiện lợi.'),
(5, 'Hỗ Trợ Khách Hàng Chu Đáo', 'Đội ngũ hỗ trợ khách hàng của chúng tôi luôn sẵn lòng giải đáp mọi thắc mắc và hỗ trợ bạn mọi lúc, mọi nơi.'),
(6, 'Hỗ Trợ Kỹ Thuật Tận Tâm', 'Đội ngũ hỗ trợ kỹ thuật của chúng tôi luôn sẵn lòng giúp đỡ bạn với mọi vấn đề từ hướng dẫn sử dụng đến giải quyết sự cố kỹ thuật. Chúng tôi hiểu rằng một dịch vụ hậu mãi');

-- --------------------------------------------------------

--
-- Table structure for table `statistic`
--

CREATE TABLE `statistic` (
  `id` int(50) NOT NULL,
  `quantity` int(150) NOT NULL,
  `item` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `statistic`
--

INSERT INTO `statistic` (`id`, `quantity`, `item`) VALUES
(1, 50, 'Đại lý ủy quyền'),
(2, 800, 'Người theo dõi trên mạng xã hội'),
(3, 10, 'Dòng iPhone phủ sóng'),
(4, 100, 'Chuyên gia tư vấn'),
(5, 22, 'Năm kinh nghiệm'),
(6, 10, 'Khóa học và workshop');

-- --------------------------------------------------------

--
-- Table structure for table `store`
--

CREATE TABLE `store` (
  `id` int(50) NOT NULL,
  `province` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `phone` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `store`
--

INSERT INTO `store` (`id`, `province`, `address`, `email`, `phone`) VALUES
(1, 'TP Hồ Chí Minh', '322 Trường Chinh, HCM', 'loc.phan2113971@hcmut.edu.vn', '0911111111'),
(2, 'Hà Nội', '174 Quang Trung, HN', 'vu@gmail.com', '+47 333 78 901'),
(3, 'Đà Nẵng', '58 Nguyễn Văn Linh, Quận Hải Châu, TP Đà Nẵng', 'dang@gmail.com', '+47 333 78 901');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_product`
--

CREATE TABLE `tbl_product` (
  `p_id` int(11) NOT NULL,
  `ptitle` varchar(250) NOT NULL,
  `pprice` varchar(100) NOT NULL,
  `pfile` varchar(250) NOT NULL,
  `pstatus` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tbl_product`
--

INSERT INTO `tbl_product` (`p_id`, `ptitle`, `pprice`, `pfile`, `pstatus`) VALUES
(2, 'iphone100', '100', '1701502462messi-world-cup-2022-590.jpg', 1);

-- --------------------------------------------------------

--
-- Table structure for table `team`
--

CREATE TABLE `team` (
  `id` int(50) NOT NULL,
  `name` varchar(160) NOT NULL,
  `role` varchar(150) NOT NULL,
  `img` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `team`
--

INSERT INTO `team` (`id`, `name`, `role`, `img`) VALUES
(1, 'Phan Nguyễn Xuân Lộc ', 'Developer', 'https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg'),
(2, 'Lộc', 'fsfsdf', 'https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg'),
(3, 'loc', 'fdfsf', 'https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg'),
(4, 'loc', 'fdfsf', 'https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg'),
(5, 'dfsdf', 'fsff', 'https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg'),
(6, 'fdf', 'fsfsf', 'https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `testimonials`
--

CREATE TABLE `testimonials` (
  `id` int(50) NOT NULL,
  `name` varchar(100) NOT NULL,
  `content` mediumtext NOT NULL,
  `img` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `testimonials`
--

INSERT INTO `testimonials` (`id`, `name`, `content`, `img`) VALUES
(1, 'Minh Anh', 'Tôi vô cùng ấn tượng với dịch vụ khách hàng của trang web này. Họ luôn sẵn lòng hỗ trợ và giải đáp mọi thắc mắc của tôi. iPhone mà tôi mua đã hoạt động tốt không có vấn đề gì. Chắc chắn tôi sẽ quay lại đây mua sắm!', 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-762020.jpg&fm=jpg'),
(2, 'Tâm', 'Mua iPhone ở đây thật sự là một trải nghiệm tuyệt vời. Hình ảnh và mô tả sản phẩm trên trang web rất chân thực, giúp tôi dễ dàng lựa chọn đúng mẫu tôi cần. Cảm ơn vì đã cung cấp dịch vụ tuyệt vời!', 'https://cc-prod.scene7.com/is/image/CCProdAuthor/portrait-photography_P6b_379x392?$pjpeg$&jpegSize=100&wid=378'),
(3, 'Minh', 'Lần đầu tiên mua iPhone online và tôi cực kỳ hài lòng! Trang web dễ sử dụng, giá cả cạnh tranh, và điều tôi thích nhất là cách họ quan tâm đến khách hàng sau khi mua hàng. Hỗ trợ kỹ thuật rất nhanh và chuyên nghiệp!', 'https://images.pexels.com/photos/35065/homeless-man-color-poverty.jpg?cs=srgb&dl=pexels-pixabay-35065.jpg&fm=jpg'),
(4, 'Lâm', 'Giao hàng nhanh chóng và bảo hành rõ ràng - đó là những gì tôi đã trải nghiệm khi mua iPhone từ trang web này. Tôi hài lòng với chất lượng sản phẩm và cảm thấy tin tưởng với các chính sách của họ.', 'https://www.worldphoto.org/sites/default/files/default-media/Piercy.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `aboutimg`
--
ALTER TABLE `aboutimg`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `carousel`
--
ALTER TABLE `carousel`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `commentdb`
--
ALTER TABLE `commentdb`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `commentnews`
--
ALTER TABLE `commentnews`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `contactpage`
--
ALTER TABLE `contactpage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `news`
--
ALTER TABLE `news`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `service`
--
ALTER TABLE `service`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `statistic`
--
ALTER TABLE `statistic`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `store`
--
ALTER TABLE `store`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_product`
--
ALTER TABLE `tbl_product`
  ADD PRIMARY KEY (`p_id`);

--
-- Indexes for table `team`
--
ALTER TABLE `team`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `testimonials`
--
ALTER TABLE `testimonials`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `aboutimg`
--
ALTER TABLE `aboutimg`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=55;

--
-- AUTO_INCREMENT for table `carousel`
--
ALTER TABLE `carousel`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12580;

--
-- AUTO_INCREMENT for table `commentdb`
--
ALTER TABLE `commentdb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `commentnews`
--
ALTER TABLE `commentnews`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `contactpage`
--
ALTER TABLE `contactpage`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `news`
--
ALTER TABLE `news`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `service`
--
ALTER TABLE `service`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `statistic`
--
ALTER TABLE `statistic`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `store`
--
ALTER TABLE `store`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `tbl_product`
--
ALTER TABLE `tbl_product`
  MODIFY `p_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `team`
--
ALTER TABLE `team`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `testimonials`
--
ALTER TABLE `testimonials`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
