// Mock data for the app

export const mockIssues = [
  {
    id: '1',
    title: '柴油机冷启动困难，黑烟过多',
    description: '最近天气转冷，我的雷沃M4000拖拉机启动变得非常困难。尤其是早晨第一次启动时，需要多次尝试才能成功。启动时排气管冒黑烟特别严重，怠速也不稳定。已经检查了电瓶和启动马达，都工作正常。请问可能是什么原因？',
    user: {
      name: '老王',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    category: 'engine',
    brand: '雷沃M4000',
    date: '2023-12-03',
    image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg',
    comments: 12,
    likes: 18,
    views: 245,
    solved: true
  },
  {
    id: '2',
    title: '变速箱换挡困难且有异响',
    description: '使用中发现变速箱换挡越来越困难，特别是在冷机状态下。换挡时会听到明显的"咔嚓"声，有时还伴随金属摩擦声。已经更换了变速箱油，但问题依然存在。怀疑是同步器或齿轮组件出现问题，需要专业建议。',
    user: {
      name: '张师傅',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
    },
    category: 'transmission',
    brand: '雷沃P5000',
    date: '2023-12-04',
    image: 'https://images.pexels.com/photos/159293/oil-machine-gear-gears-159293.jpeg',
    comments: 15,
    likes: 22,
    views: 278,
    solved: true
  },
  // 新增经典案例 - 发动机系列
  {
    id: '41',
    title: '柴油机功率不足，排气温度过高',
    description: '雷沃M5000拖拉机在重负载作业时功率明显不足，爬坡能力下降约30%。同时发现排气温度异常升高，达到650°C以上。已检查空气滤清器和燃油滤清器，均为新更换。怀疑是涡轮增压器故障或喷油系统问题。作业时还伴有轻微的金属敲击声。',
    user: {
      name: '陈师傅',
      avatar: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg'
    },
    category: 'engine',
    brand: '雷沃M5000',
    date: '2024-01-15',
    image: 'https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg',
    comments: 24,
    likes: 31,
    views: 456,
    solved: true
  },
  {
    id: '42',
    title: '柴油机水温过高，冷却系统异常',
    description: '雷沃P7000拖拉机在连续作业30分钟后水温急剧上升，仪表显示超过105°C。冷却液液位正常，散热器外观清洁，风扇工作正常。但发现冷却液有轻微乳化现象，怀疑缸垫密封不良。同时发现膨胀水箱有气泡冒出。',
    user: {
      name: '李工程师',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
    },
    category: 'engine',
    brand: '雷沃P7000',
    date: '2024-01-16',
    image: 'https://images.pexels.com/photos/2062483/pexels-photo-2062483.jpeg',
    comments: 18,
    likes: 25,
    views: 378,
    solved: false
  },
  {
    id: '43',
    title: '柴油机机油压力异常，轴承异响',
    description: '雷沃F4000拖拉机启动后机油压力指示偏低，怠速时仅0.8bar，正常工作时2.2bar（标准应为3.5bar）。发动机运转时能听到明显的轴承敲击声，特别是在加速时更为明显。机油粘度正常，机油泵外观无异常。担心是主轴承或连杆轴承磨损。',
    user: {
      name: '王技师',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    category: 'engine',
    brand: '雷沃F4000',
    date: '2024-01-17',
    image: 'https://images.pexels.com/photos/4513040/pexels-photo-4513040.jpeg',
    comments: 22,
    likes: 29,
    views: 412,
    solved: true
  },
  // 新增经典案例 - 液压系统系列
  {
    id: '44',
    title: '液压系统压力波动，提升器抖动',
    description: '雷沃M3000拖拉机液压系统出现压力不稳定现象，压力表指针在16-20MPa之间波动。提升器在升降过程中出现明显抖动，特别是在中间位置时最为严重。液压油温度正常，但发现有轻微的金属颗粒。怀疑是液压泵柱塞磨损或分配阀内泄。',
    user: {
      name: '赵师傅',
      avatar: 'https://images.pexels.com/photos/8993561/pexels-photo-8993561.jpeg'
    },
    category: 'hydraulic_lift',
    brand: '雷沃M3000',
    date: '2024-01-18',
    image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg',
    comments: 20,
    likes: 27,
    views: 389,
    solved: false
  },
  {
    id: '45',
    title: '液压油过热，系统效率下降',
    description: '雷沃P8000拖拉机在连续作业时液压油温度超过80°C，系统效率明显下降。提升速度比正常情况慢50%，同时伴有异常噪音。检查发现液压油颜色变深，粘度下降。冷却器散热片有部分堵塞，但清洗后问题依然存在。',
    user: {
      name: '孙工程师',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    category: 'hydraulic_lift',
    brand: '雷沃P8000',
    date: '2024-01-19',
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
    comments: 16,
    likes: 23,
    views: 345,
    solved: true
  },
  // 新增经典案例 - 电气系统系列
  {
    id: '46',
    title: '发电机充电不足，电瓶频繁亏电',
    description: '雷沃M4000拖拉机发电机充电电压偏低，测量仅为12.8V（标准14.2V）。电瓶经常亏电，启动困难。检查发电机皮带张紧度正常，但发现发电机有轻微异响。怀疑是发电机内部整流器或调节器故障。同时发现仪表盘充电指示灯时亮时灭。',
    user: {
      name: '周技师',
      avatar: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg'
    },
    category: 'ecu_diagnostic',
    brand: '雷沃M4000',
    date: '2024-01-20',
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg',
    comments: 19,
    likes: 26,
    views: 367,
    solved: false
  },
  {
    id: '47',
    title: '仪表盘故障，传感器信号异常',
    description: '雷沃P5000拖拉机仪表盘出现多个故障现象：水温表指示不准确，油压表读数偏低，转速表间歇性失效。通过诊断仪检测发现多个传感器信号异常。怀疑是仪表盘内部电路板故障或传感器线束接触不良。',
    user: {
      name: '吴师傅',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
    },
    category: 'ecu_diagnostic',
    brand: '雷沃P5000',
    date: '2024-01-21',
    image: 'https://images.pexels.com/photos/4513031/pexels-photo-4513031.jpeg',
    comments: 17,
    likes: 24,
    views: 356,
    solved: true
  },
  // 新增经典案例 - 收获机械系列
  {
    id: '48',
    title: 'GK120收割机脱粒滚筒轴承过热',
    description: 'GK120收割机在收获作业中发现脱粒滚筒轴承温度异常升高，用红外测温仪测量达到85°C。轴承座有明显发热现象，同时伴有轻微的金属摩擦声。检查润滑脂发现颜色变黑，怀疑轴承内圈磨损或润滑不良。担心继续使用会造成轴承抱死。',
    user: {
      name: '郑师傅',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    category: 'threshing_drum',
    brand: 'GK120',
    date: '2024-01-22',
    image: 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg',
    comments: 21,
    likes: 28,
    views: 398,
    solved: true
  },
  {
    id: '49',
    title: 'RG70收割机清选风机效率下降',
    description: 'RG70收割机清选系统效果明显下降，谷物含杂率从2%上升到8%。风机转速正常，但风量明显不足。检查发现风机叶片有轻微变形，进风口有部分堵塞。清理后效果有所改善，但仍达不到标准要求。怀疑风机内部间隙过大或叶片角度改变。',
    user: {
      name: '韩工程师',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    category: 'harvester',
    brand: 'RG70',
    date: '2024-01-23',
    image: 'https://images.pexels.com/photos/5694849/pexels-photo-5694849.jpeg',
    comments: 18,
    likes: 25,
    views: 372,
    solved: false
  },
  {
    id: '50',
    title: 'GM100收割机切割台堵塞频繁',
    description: 'GM100收割机在收割倒伏严重的水稻时，切割台频繁堵塞，平均每10分钟需要停机清理一次。已调整切割高度和前进速度，但效果不明显。发现拨禾轮转速与前进速度不匹配，同时切割器刀片有部分磨损。怀疑是切割器间隙过大或拨禾轮调整不当。',
    user: {
      name: '冯技师',
      avatar: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg'
    },
    category: 'harvester',
    brand: 'GM100',
    date: '2024-01-24',
    image: 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg',
    comments: 23,
    likes: 30,
    views: 421,
    solved: true
  },
  // 新增经典案例 - 播种机系列
  {
    id: '51',
    title: '精密播种机排种器堵塞',
    description: '雷沃P2000精密播种机在播种玉米时，第3、5、7行排种器频繁堵塞。种子流量不均匀，部分行完全断种。检查种子质量正常，清理排种器后短时间内又会堵塞。怀疑是排种盘磨损或种子箱内有杂质。同时发现气压系统压力不稳定。',
    user: {
      name: '曾师傅',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
    },
    category: 'seeder',
    brand: '雷沃P2000',
    date: '2024-01-25',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
    comments: 20,
    likes: 27,
    views: 385,
    solved: false
  },
  {
    id: '52',
    title: '播种机开沟器磨损严重',
    description: '雷沃P4000播种机开沟器磨损严重，开沟深度不一致，部分行开沟深度仅为设定值的60%。检查发现开沟器刃口磨损严重，同时弹簧压力不足。在硬质土壤中作业时，开沟器跳动明显，影响播种质量。需要更换开沟器并调整压力。',
    user: {
      name: '彭师傅',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    category: 'seeder',
    brand: '雷沃P4000',
    date: '2024-01-26',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
    comments: 16,
    likes: 23,
    views: 348,
    solved: true
  },
  // 新增经典案例 - 农机具系列
  {
    id: '53',
    title: '深松机作业阻力过大，拖拉机负荷重',
    description: '雷沃M5000拖拉机配套深松机作业时，发动机负荷过重，转速下降明显。深松深度设定35cm，但实际只能达到28cm。检查深松铲磨损正常，但发现土壤阻力异常大。怀疑是深松铲角度不当或土壤含水率过高。同时PTO轴有异响。',
    user: {
      name: '谢工程师',
      avatar: 'https://images.pexels.com/photos/8993561/pexels-photo-8993561.jpeg'
    },
    category: 'implement',
    brand: '雷沃M5000',
    date: '2024-01-27',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
    comments: 19,
    likes: 26,
    views: 374,
    solved: true
  },
  {
    id: '54',
    title: '旋耕机刀片断裂，耕作质量差',
    description: '雷沃F4000拖拉机配套旋耕机在石块较多的地块作业时，刀片频繁断裂。已更换高强度刀片，但问题依然存在。耕作后土块较大，达不到播种要求。检查发现刀轴有轻微弯曲，同时发现齿轮箱有渗油现象。怀疑是冲击负荷过大造成。',
    user: {
      name: '邓技师',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    category: 'implement',
    brand: '雷沃F4000',
    date: '2024-01-28',
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg',
    comments: 22,
    likes: 29,
    views: 407,
    solved: false
  },
  // 新增经典案例 - CVT变速箱系列
  {
    id: '55',
    title: 'CVT变速箱钢带磨损，传动效率下降',
    description: '雷沃M3000拖拉机CVT变速箱在使用2000小时后，传动效率明显下降。同样发动机转速下，车速比新机时慢20%。检查CVT油质正常，但发现油中有金属粉末。怀疑是钢带或锥轮磨损。同时发现变速箱温度偏高，达到85°C。',
    user: {
      name: '余师傅',
      avatar: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg'
    },
    category: 'cvt',
    brand: '雷沃M3000',
    date: '2024-01-29',
    image: 'https://images.pexels.com/photos/2062483/pexels-photo-2062483.jpeg',
    comments: 24,
    likes: 31,
    views: 445,
    solved: true
  },
  {
    id: '56',
    title: 'CVT变速箱液压控制系统故障',
    description: 'RG70收割机CVT变速箱出现换速不平顺现象，加速时有明显的冲击感。通过诊断仪检测发现液压控制系统压力异常。电磁阀工作正常，但压力传感器信号不稳定。怀疑是控制阀内部磨损或传感器故障。',
    user: {
      name: '姚工程师',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
    },
    category: 'cvt',
    brand: 'RG70',
    date: '2024-01-30',
    image: 'https://images.pexels.com/photos/4513031/pexels-photo-4513031.jpeg',
    comments: 18,
    likes: 25,
    views: 368,
    solved: false
  },
  // 新增经典案例 - 动力换档系列
  {
    id: '57',
    title: '动力换档离合器片烧蚀，换档冲击大',
    description: '雷沃P7000拖拉机动力换档系统在重负载作业时出现换档冲击过大的问题。特别是从2档换到3档时，冲击力度很大，整机都有明显震动。检查液压压力正常，但发现离合器油中有烧蚀物。怀疑是离合器片过度磨损或压力调节不当。',
    user: {
      name: '袁师傅',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    category: 'powershift',
    brand: '雷沃P7000',
    date: '2024-01-31',
    image: 'https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg',
    comments: 21,
    likes: 28,
    views: 392,
    solved: true
  },
  {
    id: '58',
    title: '动力换档电控系统间歇性故障',
    description: '雷沃P8000拖拉机动力换档系统出现间歇性故障，有时换档指令无响应，需要重复操作才能换档成功。故障无规律性，有时连续工作几小时正常，有时频繁出现。通过诊断仪检测未发现明确故障代码。怀疑是电控模块或线束接触不良。',
    user: {
      name: '汤技师',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    category: 'powershift',
    brand: '雷沃P8000',
    date: '2024-02-01',
    image: 'https://images.pexels.com/photos/4513040/pexels-photo-4513040.jpeg',
    comments: 17,
    likes: 24,
    views: 359,
    solved: false
  },
  // 继续添加更多经典案例...
  {
    id: '59',
    title: '拖拉机前桥异响，转向沉重',
    description: '雷沃M4000拖拉机前桥在转向时出现明显异响，转向阻力比正常情况大很多。特别是在低速转向时，能听到"咯吱咯吱"的摩擦声。检查转向助力系统压力正常，但发现前桥差速器有渗油现象。怀疑是前桥内部齿轮磨损或轴承损坏。',
    user: {
      name: '黎师傅',
      avatar: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg'
    },
    category: 'transmission',
    brand: '雷沃M4000',
    date: '2024-02-02',
    image: 'https://images.pexels.com/photos/159293/oil-machine-gear-gears-159293.jpeg',
    comments: 20,
    likes: 27,
    views: 383,
    solved: true
  },
  {
    id: '60',
    title: '收割机履带张紧度异常，行走跑偏',
    description: 'GV100收割机履带系统出现问题，左侧履带张紧度明显不足，行走时向左跑偏严重。调整张紧装置后，短时间内又会松弛。检查发现张紧弹簧有疲劳现象，同时导向轮磨损严重。在软地作业时，履带容易脱轨。',
    user: {
      name: '温工程师',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
    },
    category: 'harvester',
    brand: 'GV100',
    date: '2024-02-03',
    image: 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg',
    comments: 19,
    likes: 26,
    views: 371,
    solved: false
  }
];

export const mockBrands = [
  {
    id: 'b1',
    name: '雷沃M3000',
    logo: 'https://www.lovol.com.cn/images/logo.png',
    thumbnail: 'https://images.pexels.com/photos/2252618/pexels-photo-2252618.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    id: 'b2',
    name: '雷沃M4000',
    logo: 'https://www.lovol.com.cn/images/logo.png',
    thumbnail: 'https://images.pexels.com/photos/1112156/pexels-photo-1112156.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    id: 'b3',
    name: '雷沃M5000',
    logo: 'https://www.lovol.com.cn/images/logo.png',
    thumbnail: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    id: 'b4',
    name: '雷沃P1000',
    logo: 'https://www.lovol.com.cn/images/logo.png',
    thumbnail: 'https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    id: 'b5',
    name: '雷沃P2000',
    logo: 'https://www.lovol.com.cn/images/logo.png',
    thumbnail: 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    id: 'b6',
    name: '雷沃P3000',
    logo: 'https://www.lovol.com.cn/images/logo.png',
    thumbnail: 'https://images.pexels.com/photos/5694849/pexels-photo-5694849.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    id: 'b7',
    name: '雷沃P4000',
    logo: 'https://www.lovol.com.cn/images/logo.png',
    thumbnail: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    id: 'b8',
    name: '雷沃P5000',
    logo: 'https://www.lovol.com.cn/images/logo.png',
    thumbnail: 'https://images.pexels.com/photos/4513040/pexels-photo-4513040.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    id: 'b9',
    name: '雷沃P7000',
    logo: 'https://www.lovol.com.cn/images/logo.png',
    thumbnail: 'https://images.pexels.com/photos/2062483/pexels-photo-2062483.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    id: 'b10',
    name: '雷沃P8000',
    logo: 'https://www.lovol.com.cn/images/logo.png',
    thumbnail: 'https://images.pexels.com/photos/159293/oil-machine-gear-gears-159293.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    id: 'b11',
    name: '雷沃F4000',
    logo: 'https://www.lovol.com.cn/images/logo.png',
    thumbnail: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    id: 'b12',
    name: 'RG50',
    logo: 'https://www.lovol.com.cn/images/logo.png',
    thumbnail: 'https://images.pexels.com/photos/4513031/pexels-photo-4513031.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    id: 'b13',
    name: 'RG70',
    logo: 'https://www.lovol.com.cn/images/logo.png',
    thumbnail: 'https://images.pexels.com/photos/5748908/pexels-photo-5748908.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    id: 'b14',
    name: 'RG90',
    logo: 'https://www.lovol.com.cn/images/logo.png',
    thumbnail: 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    id: 'b15',
    name: 'GK120',
    logo: 'https://www.lovol.com.cn/images/logo.png',
    thumbnail: 'https://images.pexels.com/photos/5694849/pexels-photo-5694849.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    id: 'b16',
    name: 'GM100',
    logo: 'https://www.lovol.com.cn/images/logo.png',
    thumbnail: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  },
  {
    id: 'b17',
    name: 'GV100',
    logo: 'https://www.lovol.com.cn/images/logo.png',
    thumbnail: 'https://images.pexels.com/photos/4513040/pexels-photo-4513040.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&dpr=1'
  }
];

export const mockKnowledgeArticles = [
  // 发动机系统专业知识文章
  {
    id: 'k1',
    title: '柴油机功率不足故障诊断与排除',
    summary: '系统分析柴油机功率不足的各种原因，包括燃油系统、进气系统、排气系统等方面的故障。详细介绍诊断方法：功率测试、烟度测试、压缩比检测等。重点讲解涡轮增压器故障诊断、喷油器性能检测、气门间隙调整等关键技术。提供完整的故障排除流程和预防措施。',
    category: 'engine',
    date: '2024-01-15',
    author: {
      name: '李工程师',
      avatar: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg'
    },
    views: 2850,
    likes: 345,
    image: 'https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg'
  },
  {
    id: 'k2',
    title: '柴油机冷却系统故障分析与维修',
    summary: '深入分析柴油机冷却系统的工作原理和常见故障。包括水泵故障、节温器失效、散热器堵塞、缸垫密封不良等问题的诊断方法。详细介绍冷却液循环检测、压力测试、温度监控等技术手段。重点讲解缸垫密封性检测、水泵性能测试、散热器清洗等维修技术。',
    category: 'engine',
    date: '2024-01-12',
    author: {
      name: '王技师',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
    },
    views: 2456,
    likes: 298,
    image: 'https://images.pexels.com/photos/2062483/pexels-photo-2062483.jpeg'
  },
  {
    id: 'k3',
    title: '柴油机润滑系统维护与故障排除',
    summary: '全面介绍柴油机润滑系统的组成、工作原理和维护要点。详细分析机油压力异常、轴承异响、机油消耗过量等故障原因。重点讲解机油泵性能检测、轴承间隙测量、活塞环密封性检查等技术。提供机油选择标准、更换周期确定、添加剂使用等专业指导。',
    category: 'engine',
    date: '2024-01-10',
    author: {
      name: '张专家',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    views: 2234,
    likes: 276,
    image: 'https://images.pexels.com/photos/4513040/pexels-photo-4513040.jpeg'
  },
  // 液压系统专业知识文章
  {
    id: 'k4',
    title: '农机液压系统压力异常诊断技术',
    summary: '系统介绍农机液压系统压力异常的诊断方法和技术要点。包括压力测试设备使用、测试点选择、数据分析等内容。详细讲解液压泵性能检测、溢流阀调试、系统内泄检测等技术。重点分析压力波动、压力不足、压力过高等故障的原因和解决方案。',
    category: 'hydraulic_lift',
    date: '2024-01-08',
    author: {
      name: '刘师傅',
      avatar: 'https://images.pexels.com/photos/8993561/pexels-photo-8993561.jpeg'
    },
    views: 2654,
    likes: 324,
    image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg'
  },
  {
    id: 'k5',
    title: '液压油污染控制与过滤技术',
    summary: '深入分析液压油污染的来源、危害和控制方法。详细介绍污染度检测、过滤器选择、清洁度标准等技术内容。重点讲解在线过滤、离线过滤、磁性过滤等不同过滤技术的应用。提供液压油取样分析、污染源识别、清洁度维护等专业指导。',
    category: 'hydraulic_lift',
    date: '2024-01-05',
    author: {
      name: '赵技师',
      avatar: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg'
    },
    views: 2123,
    likes: 267,
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg'
  },
  // 电气系统专业知识文章
  {
    id: 'k6',
    title: '农机电气系统故障诊断与维修',
    summary: '全面介绍农机电气系统的组成、工作原理和故障诊断方法。包括发电机、启动机、点火系统、仪表系统等的检测技术。详细讲解万用表使用、示波器检测、绝缘电阻测试等方法。重点分析充电系统故障、启动系统故障、仪表显示异常等问题的解决方案。',
    category: 'ecu_diagnostic',
    date: '2024-01-03',
    author: {
      name: '孙师傅',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    views: 2876,
    likes: 356,
    image: 'https://images.pexels.com/photos/162553/keys-workshop-mechanic-tools-162553.jpeg'
  },
  {
    id: 'k7',
    title: 'ECU故障代码深度解析与处理',
    summary: '深入解析农机ECU故障代码的含义和处理方法。包括发动机管理系统、变速箱控制系统、液压控制系统等的故障代码分析。详细介绍诊断仪使用技巧、数据流分析、参数标定等技术。重点讲解传感器故障诊断、执行器测试、控制逻辑分析等专业技能。',
    category: 'ecu_diagnostic',
    date: '2024-01-01',
    author: {
      name: '马工程师',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
    },
    views: 3124,
    likes: 398,
    image: 'https://images.pexels.com/photos/4513031/pexels-photo-4513031.jpeg'
  },
  // 收获机械专业知识文章
  {
    id: 'k8',
    title: '收割机脱粒系统优化调整技术',
    summary: '系统介绍收割机脱粒系统的工作原理和优化调整方法。包括脱粒滚筒转速调节、脱粒间隙设定、凹板筛调整等技术要点。详细讲解不同作物的脱粒参数设置、脱粒质量评估、损失率控制等内容。重点分析脱粒不净、破碎率高、堵塞频繁等问题的解决方案。',
    category: 'threshing_drum',
    date: '2023-12-28',
    author: {
      name: '周专家',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    views: 2567,
    likes: 312,
    image: 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg'
  },
  {
    id: 'k9',
    title: '收割机清选系统故障诊断与调试',
    summary: '深入分析收割机清选系统的工作原理和故障诊断方法。包括风机性能检测、筛子调整、清选效果评估等技术内容。详细介绍风量测试、筛分试验、含杂率检测等方法。重点讲解清选不净、损失过大、风机效率低等问题的诊断和解决技术。',
    category: 'harvester',
    date: '2023-12-25',
    author: {
      name: '陈师傅',
      avatar: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg'
    },
    views: 2234,
    likes: 278,
    image: 'https://images.pexels.com/photos/5694849/pexels-photo-5694849.jpeg'
  },
  // CVT变速箱专业知识文章
  {
    id: 'k10',
    title: 'CVT无级变速技术原理与维护',
    summary: '全面介绍CVT无级变速技术的工作原理、结构特点和维护要点。包括钢带传动机理、液压控制系统、电子管理单元等核心技术。详细讲解CVT油选择标准、更换周期、滤清器维护等内容。重点分析传动效率下降、异常振动、过热保护等故障的预防和处理方法。',
    category: 'cvt',
    date: '2023-12-22',
    author: {
      name: '吴工程师',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    views: 3456,
    likes: 445,
    image: 'https://images.pexels.com/photos/2062483/pexels-photo-2062483.jpeg'
  },
  {
    id: 'k11',
    title: 'CVT变速箱故障诊断与维修技术',
    summary: '系统讲解CVT变速箱的故障诊断技术和维修方法。包括传动效率检测、振动分析、温度监控、压力测试等诊断手段。详细介绍钢带磨损检查、锥轮间隙测量、液压系统检测等技术。重点分析打滑、异响、过热等故障的原因和解决方案。',
    category: 'cvt',
    date: '2023-12-20',
    author: {
      name: '郑技师',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
    },
    views: 2789,
    likes: 334,
    image: 'https://images.pexels.com/photos/4513031/pexels-photo-4513031.jpeg'
  },
  // 动力换档专业知识文章
  {
    id: 'k12',
    title: '动力换档系统控制技术与调试',
    summary: '深入介绍动力换档系统的控制技术和调试方法。包括电液控制原理、换档逻辑、压力调节等技术要点。详细讲解换档时机控制、压力曲线优化、响应时间调整等内容。重点分析换档冲击、响应迟缓、控制失效等问题的诊断和解决技术。',
    category: 'powershift',
    date: '2023-12-18',
    author: {
      name: '韩专家',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    views: 2345,
    likes: 289,
    image: 'https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg'
  },
  {
    id: 'k13',
    title: '动力换档离合器维护与故障排除',
    summary: '全面分析动力换档离合器的工作原理和维护技术。包括湿式离合器结构、摩擦片材料、冷却润滑等内容。详细介绍离合器压力测试、摩擦片磨损检查、油质分析等方法。重点讲解打滑、烧蚀、压力不足等故障的预防和处理技术。',
    category: 'powershift',
    date: '2023-12-15',
    author: {
      name: '冯师傅',
      avatar: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg'
    },
    views: 2123,
    likes: 256,
    image: 'https://images.pexels.com/photos/4513040/pexels-photo-4513040.jpeg'
  },
  // 播种机专业知识文章
  {
    id: 'k14',
    title: '精密播种技术与排种器调试',
    summary: '系统介绍精密播种技术的原理和排种器调试方法。包括气吸式、机械式、气压式等不同类型排种器的工作原理。详细讲解播种量调节、播种均匀性检测、排种器清洁维护等技术。重点分析排种不均、断种、重播等问题的解决方案。',
    category: 'seeder',
    date: '2023-12-12',
    author: {
      name: '曾工程师',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
    },
    views: 2678,
    likes: 323,
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg'
  },
  {
    id: 'k15',
    title: '播种机开沟覆土系统优化技术',
    summary: '深入分析播种机开沟覆土系统的工作原理和优化方法。包括开沟器类型选择、开沟深度控制、覆土轮调整等技术要点。详细介绍土壤条件适应性、开沟阻力控制、覆土质量评估等内容。重点讲解开沟深度不一致、覆土效果差等问题的解决技术。',
    category: 'seeder',
    date: '2023-12-10',
    author: {
      name: '彭技师',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    views: 2234,
    likes: 267,
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg'
  },
  // 农机具专业知识文章
  {
    id: 'k16',
    title: '深松机作业技术与故障排除',
    summary: '全面介绍深松机的作业技术和故障排除方法。包括深松铲类型选择、作业深度控制、土壤阻力分析等技术内容。详细讲解深松效果评估、功耗控制、铲尖磨损检查等方法。重点分析作业深度不够、阻力过大、铲尖断裂等问题的预防和解决技术。',
    category: 'implement',
    date: '2023-12-08',
    author: {
      name: '谢师傅',
      avatar: 'https://images.pexels.com/photos/8993561/pexels-photo-8993561.jpeg'
    },
    views: 2456,
    likes: 298,
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg'
  },
  {
    id: 'k17',
    title: '旋耕机刀具配置与维护技术',
    summary: '系统分析旋耕机刀具的配置原理和维护技术。包括刀片类型选择、排列方式、磨损检查等内容。详细介绍刀轴平衡调整、齿轮箱维护、安全防护等技术要点。重点讲解刀片断裂、耕作质量差、功耗过大等问题的诊断和解决方法。',
    category: 'implement',
    date: '2023-12-05',
    author: {
      name: '邓工程师',
      avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg'
    },
    views: 2345,
    likes: 278,
    image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg'
  },
  // 新增专业维修案例分析
  {
    id: 'k18',
    title: '农机液压系统污染控制与清洁度管理',
    summary: '深入分析农机液压系统污染的来源、检测方法和控制技术。包括固体颗粒污染、水分污染、化学污染等类型的识别和处理。详细介绍ISO清洁度标准、污染度检测设备使用、过滤器选择等技术。重点讲解在线监测、离线净化、系统冲洗等清洁度管理方法。',
    category: 'hydraulic_lift',
    date: '2023-12-03',
    author: {
      name: '余技师',
      avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg'
    },
    views: 2789,
    likes: 345,
    image: 'https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg'
  },
  {
    id: 'k19',
    title: '柴油机涡轮增压系统故障诊断与维修',
    summary: '系统介绍柴油机涡轮增压系统的工作原理和故障诊断技术。包括增压压力检测、涡轮转速测量、中冷器效率评估等内容。详细讲解涡轮叶片损伤检查、压气机喘振诊断、废气旁通阀调试等技术。重点分析增压压力不足、异响、漏油等故障的维修方法。',
    category: 'engine',
    date: '2023-12-01',
    author: {
      name: '姚工程师',
      avatar: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg'
    },
    views: 3234,
    likes: 412,
    image: 'https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg'
  },
  {
    id: 'k20',
    title: '收割机切割台调整与维护技术',
    summary: '全面分析收割机切割台的调整技术和维护要点。包括切割器间隙调整、拨禾轮位置设定、分禾器角度调节等内容。详细介绍切割质量评估、刀片磨损检查、传动系统维护等技术。重点讲解堵塞预防、切割效率提升、适应性调整等专业技能。',
    category: 'harvester',
    date: '2023-11-28',
    author: {
      name: '袁师傅',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg'
    },
    views: 2567,
    likes: 312,
    image: 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg'
  }
];

// 新增详细的故障排查方案数据
export const detailedTroubleshootingGuides = [
  {
    id: 'guide1',
    title: '柴油机功率不足完整排查方案',
    category: 'engine',
    symptoms: [
      '爬坡能力下降',
      '最大转速达不到额定值',
      '负载时转速下降过快',
      '排气冒黑烟或白烟',
      '燃油消耗量增加'
    ],
    diagnosticSteps: [
      {
        step: 1,
        title: '基础检查',
        description: '检查空气滤清器、燃油滤清器、机油液位',
        tools: ['压缩空气', '机油尺', '燃油压力表'],
        timeRequired: '30分钟',
        difficulty: '简单'
      },
      {
        step: 2,
        title: '燃油系统检查',
        description: '检查燃油泵压力、喷油器雾化质量、燃油管路',
        tools: ['燃油压力表', '喷油器测试台', '内窥镜'],
        timeRequired: '2小时',
        difficulty: '中等'
      },
      {
        step: 3,
        title: '进气系统检查',
        description: '检查涡轮增压器、中冷器、进气管路密封性',
        tools: ['增压压力表', '烟度计', '压力测试仪'],
        timeRequired: '1.5小时',
        difficulty: '中等'
      },
      {
        step: 4,
        title: '气门机构检查',
        description: '检查气门间隙、气门密封性、配气相位',
        tools: ['厚薄规', '气缸压力表', '正时工具'],
        timeRequired: '3小时',
        difficulty: '困难'
      }
    ],
    commonCauses: [
      {
        cause: '空气滤清器堵塞',
        probability: '30%',
        solution: '清洁或更换空气滤清器',
        cost: '低',
        preventive: '定期检查清洁，恶劣环境下缩短更换周期'
      },
      {
        cause: '燃油滤清器堵塞',
        probability: '25%',
        solution: '更换燃油滤清器，检查燃油质量',
        cost: '低',
        preventive: '使用优质燃油，定期更换滤清器'
      },
      {
        cause: '喷油器雾化不良',
        probability: '20%',
        solution: '清洗或更换喷油器，调整喷油压力',
        cost: '中',
        preventive: '使用清洁燃油，定期检测喷油器性能'
      },
      {
        cause: '涡轮增压器故障',
        probability: '15%',
        solution: '维修或更换涡轮增压器',
        cost: '高',
        preventive: '定期检查增压压力，及时更换机油'
      },
      {
        cause: '气门间隙过大',
        probability: '10%',
        solution: '调整气门间隙至标准值',
        cost: '中',
        preventive: '按保养周期检查调整气门间隙'
      }
    ],
    safetyWarnings: [
      '检查燃油系统时严禁明火',
      '拆装涡轮增压器时注意高温烫伤',
      '使用压缩空气时佩戴防护眼镜',
      '调整气门时确保发动机完全冷却'
    ]
  },
  {
    id: 'guide2',
    title: '液压系统压力异常完整排查方案',
    category: 'hydraulic_lift',
    symptoms: [
      '提升速度缓慢',
      '提升力不足',
      '压力表指示异常',
      '系统噪音增大',
      '液压油温度过高'
    ],
    diagnosticSteps: [
      {
        step: 1,
        title: '液压油检查',
        description: '检查液压油液位、颜色、粘度、清洁度',
        tools: ['液位计', '粘度计', '污染度检测仪'],
        timeRequired: '45分钟',
        difficulty: '简单'
      },
      {
        step: 2,
        title: '压力测试',
        description: '测试系统各点压力，绘制压力分布图',
        tools: ['精密压力表', '快速接头', '压力测试工具包'],
        timeRequired: '2小时',
        difficulty: '中等'
      },
      {
        step: 3,
        title: '流量测试',
        description: '测试液压泵流量、各执行器流量消耗',
        tools: ['流量计', '温度计', '秒表'],
        timeRequired: '1.5小时',
        difficulty: '中等'
      },
      {
        step: 4,
        title: '内泄检测',
        description: '检测液压缸、阀类元件内泄情况',
        tools: ['内泄测试仪', '压力保持测试工具'],
        timeRequired: '2.5小时',
        difficulty: '困难'
      }
    ],
    commonCauses: [
      {
        cause: '液压油污染',
        probability: '35%',
        solution: '更换液压油和滤清器，清洗系统',
        cost: '中',
        preventive: '定期更换液压油，保持系统清洁'
      },
      {
        cause: '液压泵磨损',
        probability: '25%',
        solution: '维修或更换液压泵',
        cost: '高',
        preventive: '使用优质液压油，避免空载运转'
      },
      {
        cause: '溢流阀调整不当',
        probability: '20%',
        solution: '重新调整溢流阀压力设定',
        cost: '低',
        preventive: '定期检查压力设定值'
      },
      {
        cause: '液压缸内泄',
        probability: '15%',
        solution: '更换液压缸密封件或活塞',
        cost: '中',
        preventive: '避免系统过载，定期检查密封件'
      },
      {
        cause: '管路堵塞',
        probability: '5%',
        solution: '清洗或更换堵塞管路',
        cost: '低',
        preventive: '使用清洁液压油，定期清洗系统'
      }
    ],
    safetyWarnings: [
      '测试压力时注意高压危险',
      '拆装液压元件前必须卸压',
      '液压油温度高时避免直接接触',
      '使用专用工具，避免管路损伤'
    ]
  },
  {
    id: 'guide3',
    title: 'CVT变速箱故障完整排查方案',
    category: 'cvt',
    symptoms: [
      '传动效率下降',
      '异常振动',
      '变速箱过热',
      '异响噪音',
      '换速不平顺'
    ],
    diagnosticSteps: [
      {
        step: 1,
        title: 'CVT油检查',
        description: '检查CVT专用油液位、颜色、粘度、金属含量',
        tools: ['CVT油尺', '光谱分析仪', '粘度计'],
        timeRequired: '1小时',
        difficulty: '简单'
      },
      {
        step: 2,
        title: '传动效率测试',
        description: '测试输入输出转速比、功率传递效率',
        tools: ['转速表', '功率分析仪', '扭矩传感器'],
        timeRequired: '2小时',
        difficulty: '中等'
      },
      {
        step: 3,
        title: '液压控制系统检查',
        description: '检查液压压力、电磁阀工作状态、传感器信号',
        tools: ['压力表', '示波器', '诊断仪'],
        timeRequired: '2.5小时',
        difficulty: '困难'
      },
      {
        step: 4,
        title: '机械部件检查',
        description: '检查钢带磨损、锥轮表面、轴承状态',
        tools: ['内窥镜', '磁粉探伤仪', '轴承检测仪'],
        timeRequired: '4小时',
        difficulty: '困难'
      }
    ],
    commonCauses: [
      {
        cause: 'CVT油老化变质',
        probability: '40%',
        solution: '更换CVT专用油和滤清器',
        cost: '中',
        preventive: '按规定周期更换CVT油，避免过载使用'
      },
      {
        cause: '钢带磨损',
        probability: '25%',
        solution: '更换钢带总成',
        cost: '高',
        preventive: '避免急加速急减速，定期检查CVT油质量'
      },
      {
        cause: '锥轮磨损',
        probability: '20%',
        solution: '修复或更换锥轮',
        cost: '高',
        preventive: '使用优质CVT油，避免长时间高负荷运转'
      },
      {
        cause: '液压控制阀故障',
        probability: '10%',
        solution: '清洗或更换控制阀',
        cost: '中',
        preventive: '保持CVT油清洁，定期检查控制系统'
      },
      {
        cause: '传感器故障',
        probability: '5%',
        solution: '更换故障传感器',
        cost: '低',
        preventive: '避免水分侵入，定期检查线束连接'
      }
    ],
    safetyWarnings: [
      'CVT系统拆装需要专用工具',
      '钢带具有高张力，拆装时注意安全',
      '液压系统压力高，操作前必须卸压',
      '电气检测时注意防止短路'
    ]
  }
];