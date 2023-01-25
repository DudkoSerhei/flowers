const wreaths = [
  {
    id: 1,
    images: ['https://i.ibb.co/mtk79Z4/1.png', 'https://i.ibb.co/CvML9j3/2.png', 'https://i.ibb.co/6mbqvJW/3.png', 'https://i.ibb.co/pWvZGH8/4.png', 'https://i.ibb.co/k16RJFn/5.png', 'https://i.ibb.co/FsGv5ff/Photo-Room-002-20230115-161907.png', 'https://i.ibb.co/0mtJBmk/Photo-Room-003-20230115-161907.png'],
    code: 'ДСГ',
    price: '36',
  },
  {
    id: 2,
    images: ['https://i.ibb.co/Btr8wHC/1.png', 'https://i.ibb.co/xY5NvCM/2.png', 'https://i.ibb.co/0VT4w0N/3.png', 'https://i.ibb.co/vkFTwsK/4.png', 'https://i.ibb.co/VNFMjms/5.png'],
    code: 'ДСЛ',
    price: '36',
  },
  {
    id: 3,
    images: ['https://i.ibb.co/zR0JZ9k/1.png', 'https://i.ibb.co/hM57bxN/2.png', 'https://i.ibb.co/cTVRrFP/3.png'],
    code: 'КБ_КВР-15',
    price: '72',
  },
  {
    id: 4,
    images: ['https://i.ibb.co/Wx042V0/1.png', 'https://i.ibb.co/85Tvz3x/2.png'],
    code: 'КБ-1',
    price: '78',
  },
  {
    id: 5,
    images: ['https://i.ibb.co/4KWT109/1.png', 'https://i.ibb.co/x8Wp7VG/2.png', 'https://i.ibb.co/FWrHnPv/Photo-Room-006-20230115-192628.png'],
    code: 'КБ-12',
    price: '73',
  },
  {
    id: 6,
    images: ['https://i.ibb.co/NmnX54L/1.png', 'https://i.ibb.co/ng2JdT4/2.png', 'https://i.ibb.co/8xMbzL2/Photo-Room-002-20230115-194228.png'],
    code: 'КБ-13',
    price: '53',
  },
  {
    id: 7,
    images: ['https://i.ibb.co/C9vKZKQ/2-91.png', 'https://i.ibb.co/bJhJJhH/Photo-Room-001-20230115-191515.png', "https://i.ibb.co/102wy3j/Photo-Room-003-20230124-230341.png"],
    code: 'КБ-2',
    price: '91',
  },
  {
    id: 8,
    images: ['https://i.ibb.co/gJWchp3/5-59.png', 'https://i.ibb.co/WHrKQwN/Photo-Room-003-20230115-163007.png', 'https://i.ibb.co/bHnss3S/Photo-Room-004-20230115-163007.png'],
    code: 'КБ-5',
    price: '59',
  },
  {
    id: 9,
    images: ['https://i.ibb.co/k83McN3/1.png', 'https://i.ibb.co/fCp1NbY/2.png', "https://i.ibb.co/dgcgyJc/Photo-Room-000-20230124-230341.png"],
    code: 'КБ-6',
    price: '69',
  },
  {
    id: 10,
    images: ['https://i.ibb.co/sCgw266/1.png', 'https://i.ibb.co/PwDp1Vq/2.png', 'https://i.ibb.co/q5Qh0QJ/3.png', 'https://i.ibb.co/BK9bxTC/4.png', 'https://i.ibb.co/pjvBcqy/5.png'],
    code: 'КБ-7',
    price: '60',
  },
  {
    id: 11,
    images: ['https://i.ibb.co/cYcnm3j/1.png', 'https://i.ibb.co/HxcSvH1/2.png', 'https://i.ibb.co/FwRmrvR/3.png', 'https://i.ibb.co/mXsXB25/4.png', 'https://i.ibb.co/9qjS0wT/5.png', "https://i.ibb.co/SJVw7yJ/Photo-Room-008-20230124-230341.png"],
    code: 'КВР-21',
    price: '46',
  },
  {
    id: 12,
    images: ['https://i.ibb.co/z8mJB9C/1.png', 'https://i.ibb.co/nmckKN3/2.png', 'https://i.ibb.co/b2NFjWp/3.png', 'https://i.ibb.co/wWkYVw3/4.png', 'https://i.ibb.co/DVqzcby/5.png'],
    code: 'КС-1',
    price: '26',
  },
  {
    id: 13,
    images: ['https://i.ibb.co/FwgC6C8/1.png', 'https://i.ibb.co/JmRCF9J/2.png', 'https://i.ibb.co/48sQLks/3.png', 'https://i.ibb.co/QP4R3rb/4.png', "https://i.ibb.co/FzyvWHC/Photo-Room-004-20230124-230341.png", "https://i.ibb.co/mzLKJ2v/Photo-Room-005-20230124-230341.png"],
    code: 'КС-2',
    price: '36',
  },
  {
    id: 14,
    images: ['https://i.ibb.co/RBYZqgR/1.png', 'https://i.ibb.co/jMK2NGf/2.png', 'https://i.ibb.co/wQwzxpy/3.png', 'https://i.ibb.co/m0Gr2Z3/4.png', 'https://i.ibb.co/NjWrhjz/5.png', 'https://i.ibb.co/Z2Mr913/6.png', 'https://i.ibb.co/4ZT0xxC/7.png', 'https://i.ibb.co/KzqXs6p/Photo-Room-004-20230115-163235.png', "https://i.ibb.co/JmZwLqY/Photo-Room-002-20230124-230341.png"],
    code: 'КС-3',
    price: '',
  },
  {
    id: 15,
    images: ['https://i.ibb.co/n076w78/Photo-Room-001-20230115-163235.png', 'https://i.ibb.co/7bHMjC7/1.png', 'https://i.ibb.co/X8nbQNq/2.png', 'https://i.ibb.co/R3SxsYt/3.png', 'https://i.ibb.co/NxXDQ02/4.png', 'https://i.ibb.co/87Qb1PV/5.png', 'https://i.ibb.co/QM5RzXd/6.png', 'https://i.ibb.co/rvHD2Nm/Photo-Room-000-20230115-163235.png'],
    code: 'ЛБ',
    price: '46',
  },
  {
    id: 16,
    images: ['https://i.ibb.co/4NkvwF6/1.png', 'https://i.ibb.co/PmysQm9/2.png', 'https://i.ibb.co/r4vtKNz/3.png', 'https://i.ibb.co/Xb3dxR9/4.png', 'https://i.ibb.co/3T5MXRc/5.png', 'https://i.ibb.co/WK54w6m/6.png', 'https://i.ibb.co/sJRCMQC/7.png', 'https://i.ibb.co/8svHRDS/8.png', 'https://i.ibb.co/23qk3gP/9.png', 'https://i.ibb.co/XfB6rwh/10.png', 'https://i.ibb.co/QM4N3pz/Photo-Room-000-20230115-161907.png'],
    code: 'ПП',
    price: '30',
  },
  {
    id: 17,
    images: ['https://i.ibb.co/LZJsGrV/1.png', 'https://i.ibb.co/b20PRdk/2.png', 'https://i.ibb.co/r6VnGd9/3.png', 'https://i.ibb.co/GtQ1Dmn/4.png', 'https://i.ibb.co/L0XjYWS/5.png', 'https://i.ibb.co/7JwksVm/6.png', 'https://i.ibb.co/qnnWxBT/7.png', 'https://i.ibb.co/NszkdQ8/8.png'],
    code: 'ПС',
    price: '26',
  },
  {
    id: 18,
    images: ['https://i.ibb.co/hDXbhBM/1.png', 'https://i.ibb.co/MP4hTyS/2.png', 'https://i.ibb.co/g4Txt6d/3.png', 'https://i.ibb.co/474dR83/4.png', 'https://i.ibb.co/L5yXYqX/5.png', 'https://i.ibb.co/KKKdCdJ/Photo-Room-002-20230115-163646.png', 'https://i.ibb.co/MVCLxX8/Photo-Room-003-20230115-163235.png'],
    code: 'РГБ-1',
    price: '30',
  },
  {
    id: 19,
    images: ['https://i.ibb.co/mS3Hh7P/1.png', 'https://i.ibb.co/rkbcJPW/2.png', 'https://i.ibb.co/34TTn9L/3.png', 'https://i.ibb.co/jL1SxFv/4.png', 'https://i.ibb.co/cTMGswN/5.png', 'https://i.ibb.co/GpQbKWR/Photo-Room-000-20230115-193629.png', 'https://i.ibb.co/rGpC3j4/Photo-Room-001-20230115-194228.png'],
    code: 'РХТ-1',
    price: '50',
  },
  {
    id: 20,
    images: ['https://i.ibb.co/Kctm8rN/1.png', 'https://i.ibb.co/vvqp9PR/2.png', 'https://i.ibb.co/3vmdG8k/3.png', 'https://i.ibb.co/QjnDHvT/4.png'],
    code: 'РХТ-3',
    price: '40',
  },
  {
    id: 21,
    images: ['https://i.ibb.co/4YfYNJf/1.png', 'https://i.ibb.co/z215kRb/2.png', 'https://i.ibb.co/RHqTq6f/3.png', 'https://i.ibb.co/pQ5SpZd/4.png', 'https://i.ibb.co/xMMV2yH/5.png', 'https://i.ibb.co/qmp0Q3n/6.png', 'https://i.ibb.co/6WHy6hf/7.png', 'https://i.ibb.co/T4dCcyd/8.png', 'https://i.ibb.co/K0Y7X6z/9.png', 'https://i.ibb.co/5rgyLzr/10.png', 'https://i.ibb.co/mqKKWfc/11.png', 'https://i.ibb.co/5kh7Ncq/12.png', 'https://i.ibb.co/fn1849Y/13.png', 'https://i.ibb.co/3mMtsVq/14.png'],
    code: 'РШТ-1',
    price: '23',
  },
  {
    id: 22,
    images: ['https://i.ibb.co/qDpn6xk/1.png', 'https://i.ibb.co/nwKRWyD/2.png', 'https://i.ibb.co/2v4pfWm/3.png', 'https://i.ibb.co/RTZ4z95/4.png', 'https://i.ibb.co/tCFJHCT/5.png', 'https://i.ibb.co/StWLPCf/6.png', 'https://i.ibb.co/bLHvBT5/7.png', 'https://i.ibb.co/Hn9q8LF/8.png', 'https://i.ibb.co/ft2KBMj/9.png'],
    code: 'РШТ-П',
    price: '33',
  },
  {
    id: 23,
    images: ['https://i.ibb.co/qB14Tvn/1.png', 'https://i.ibb.co/pX2rp2G/2.png', 'https://i.ibb.co/x2NVyGF/Photo-Room-001-20230115-192628.png', 'https://i.ibb.co/FsqJHbw/Photo-Room-002-20230115-192628.png'],
    code: 'ЧРП-1',
    price: '',
  },
  {
    id: 24,
    images: ['https://i.ibb.co/J56Jhqr/1.png', 'https://i.ibb.co/Df9WWVh/2.png', 'https://i.ibb.co/PZHRq1Q/Photo-Room-005-20230115-191515.png'],
    code: 'ЧРП-3',
    price: '',
  },
  {
    id: 25,
    images: ['https://i.ibb.co/dfpgkq8/1.png', 'https://i.ibb.co/SwDS4G9/2.png', 'https://i.ibb.co/4NBtxBx/3.png', 'https://i.ibb.co/8711Xm1/4.png', 'https://i.ibb.co/Twcn8PT/5.png', 'https://i.ibb.co/2Kctx5Z/Photo-Room-000-20230115-162513.png', 'https://i.ibb.co/7SR0FH6/Photo-Room-001-20230115-163007.png', 'https://i.ibb.co/1ZVht3N/Photo-Room-002-20230115-163007.png'],
    code: 'ЯО-1',
    price: '46',
  },
  {
    id: 26,
    images: ['https://i.ibb.co/zf2M1YB/Photo-Room-003-20230115-194228.png', 'https://i.ibb.co/yskvdQB/2.png', 'https://i.ibb.co/MBQFHG7/3.png', 'https://i.ibb.co/PN31j13/4.png', 'https://i.ibb.co/0CGBdnS/Photo-Room-004-20230115-194228.png'],
    code: 'ЯО-3',
    price: '63',
  },
  {
    id: 27,
    images: ['https://i.ibb.co/ZVbmC2C/1.png', 'https://i.ibb.co/LYbxp1r/2.png', 'https://i.ibb.co/T8KR4Yp/3.png', 'https://i.ibb.co/DGtgyLw/4.png', 'https://i.ibb.co/7vTHB1H/5.png'],
    code: 'ЯО-4',
    price: '42',
  },
  {
    id: 28,
    images: ['https://i.ibb.co/xD7rhm5/1.png', 'https://i.ibb.co/WgRrLzy/2.png', 'https://i.ibb.co/7JDjdQF/3.png', 'https://i.ibb.co/7Yfhkvd/Photo-Room-005-20230115-192628.png'],
    code: 'ЯО-6',
    price: '',
  },
  {
    id: 29,
    images: ['https://i.ibb.co/tYT49dt/Photo-Room-000-20230115-163845.png'],
    code: 'КВР-1',
    price: '',
  },
  {
    id: 30,
    images: ['https://i.ibb.co/4PH6xxF/Photo-Room-000-20230115-192628.png', 'https://i.ibb.co/XZM4fMm/Photo-Room-003-20230115-192628.png'],
    code: 'ЧРП-4',
    price: '',
  },
  {
    id: 31,
    images: ['https://i.ibb.co/k6cWm0x/Photo-Room-001-20230115-161907.png', "https://i.ibb.co/DWCxRTJ/Photo-Room-000-20220820-001849-1.png"],
    code: 'КВР-9',
    price: '',
  },
  {
    id: 33,
    images: ['https://i.ibb.co/xjZ8vmx/Photo-Room-002-20230115-191515.png', 'https://i.ibb.co/fdfzdWZ/Photo-Room-003-20230115-191515.png'],
    code: 'ЧРП-6',
    price: '',
  },
  {
    id: 34,
    images: ['https://i.ibb.co/bHsyQst/Photo-Room-004-20230115-191515.png', 'https://i.ibb.co/tH1QCXH/Photo-Room-004-20230115-192628.png'],
    code: 'ЧРП-2',
    price: '',
  },
  {
    id: 35,
    images: ['https://i.ibb.co/n0SLhTc/Photo-Room-005-20230115-163007.png', "https://i.ibb.co/dfLMJFg/Photo-Room-001-20220819-213223.png", "https://i.ibb.co/wrRHYvq/Photo-Room-000-20220819-213223.png"],
    code: 'КБ-8',
    price: '',
  },
  {
    id: 36,
    images: ['https://i.ibb.co/3Rr7CCb/Photo-Room-005-20230115-163646.png', "https://i.ibb.co/59Yq1b0/Photo-Room-001-20230124-230341.png"],
    code: 'ПО',
    price: '',
  },
  {
    id: 38,
    images: ['https://i.ibb.co/G33L4zk/Photo-Room-005-20230115-194228.png'],
    code: 'ПП-2',
    price: '',
  },
  {
    id: 39,
    images: ['https://i.ibb.co/K7j7SyK/Photo-Room-006-20230115-194228.png', "https://i.ibb.co/bFXBV0G/Photo-Room-006-20230124-230341.png", "https://i.ibb.co/wsz2gSQ/Photo-Room-007-20230124-230341.png"],
    code: 'РШТ-2',
    price: '',
  },
  {
    id: 40,
    images: ["https://i.ibb.co/q980Ym7/Photo-Room-014-20230124-230341.png", "https://i.ibb.co/mhYqst8/Photo-Room-015-20230124-230341.png", "https://i.ibb.co/SRy6xtj/Photo-Room-016-20230124-230341.png"],
    code: 'КВР-2',
    price: '',
  },
]

export default wreaths;