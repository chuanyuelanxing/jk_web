-- phpMyAdmin SQL Dump
-- version phpStudy 2014
-- http://www.phpmyadmin.net
--
-- 主机: localhost
-- 生成日期: 2017 年 02 月 27 日 11:49
-- 服务器版本: 5.5.47
-- PHP 版本: 5.3.29

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- 数据库: `baidunews`
--

-- --------------------------------------------------------

--
-- 表的结构 `news`
--

CREATE TABLE IF NOT EXISTS `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '主键',
  `newstype` char(60) NOT NULL COMMENT '新闻类型',
  `newstitle` varchar(200) NOT NULL COMMENT '新闻标题',
  `newsimg` varchar(200) NOT NULL COMMENT '新闻图片地址',
  `newssrc` varchar(200) NOT NULL COMMENT '新闻来源',
  `newstime` datetime NOT NULL COMMENT '新闻更新时间',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM  DEFAULT CHARSET=utf8 COMMENT='新闻内容表' AUTO_INCREMENT=63 ;

--
-- 转存表中的数据 `news`
--

INSERT INTO `news` (`id`, `newstype`, `newstitle`, `newsimg`, `newssrc`, `newstime`) VALUES
(1, '精选', '东风21D导弹,对付航母的杀手锏武器！美国无法防范！', 'img/1.jpg', '多维新闻', '2015-12-25 00:00:00'),
(41, '百家', '彭博误报人民币破7 市场紧张', 'img/1.jpg', '第三方', '2016-12-09 12:00:00'),
(3, '军事', '中国飞行员头盔SHOOT IT回击美军挑衅', 'img/3.jpg', '多维新闻', '2016-12-23 00:00:00'),
(4, '社会', '台官方列七大点 说明中美台关系', 'img/4.jpg', '多维新闻', '2016-12-15 00:00:00'),
(57, '女人', '女人新闻', 'img/7.jpg', '搜狐', '2016-12-08 12:00:00'),
(44, '图片', '我不知道是什么新闻', 'img/5.jpg', '新浪', '2016-12-01 00:00:00'),
(45, '社会', '北京群众纪念毛泽东 红歌表演似穿越', 'img/6.jpg', '新浪', '2016-12-02 12:00:00'),
(52, '娱乐', '测2', 'img/2.jpg', '新浪', '2016-12-02 00:00:00'),
(56, '搞笑', '新的测试标题', 'img/2.jpg', '凤凰', '2016-12-08 12:00:00'),
(58, '互联网', '乐视网将引入100亿战略投资 解“燃眉之急”够用了吗？', 'img/8.jpg', '天涯', '2016-12-29 12:00:00'),
(59, '本地', '日本：铁路的软硬服务简直逆天了', 'img/9.jpg', '大地', '2016-12-07 12:00:00');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
