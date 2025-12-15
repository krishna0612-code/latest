// import React, { useState, useEffect, useRef } from "react";
// import LiveRouteTracker from "./LiveRouteTracker";
// import "./Dashboard.css";

// // SVG Icons Component
// const SvgIcons = {
//   // Status Icons
//   Online: () => (
//     <svg
//       width="12"
//       height="12"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="3"
//     >
//       <circle cx="12" cy="12" r="10" />
//     </svg>
//   ),
//   Offline: () => (
//     <svg
//       width="12"
//       height="12"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <line x1="18" y1="6" x2="6" y2="18" />
//     </svg>
//   ),

//   // Action Icons
//   Bell: () => (
//     <svg
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
//       <path d="M13.73 21a2 2 0 0 1-3.46 0" />
//     </svg>
//   ),
//   Chat: () => (
//     <svg
//       width="20"
//       height="20"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1-2-2h14a2 2 0 0 1 2 2z" />
//     </svg>
//   ),

//   // Stats Icons
//   Package: () => (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <path d="M16.5 9.4l-9-5.19M21 16v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2M3 7h18v5H3z" />
//       <path d="m9.5 22 1.5-7 3 6.5M13.5 22 12 15l-3 6.5" />
//     </svg>
//   ),
//   Clock: () => (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <polyline points="12 6 12 12 16 14" />
//     </svg>
//   ),
//   Truck: () => (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <rect x="1" y="3" width="15" height="13" />
//       <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
//       <circle cx="5.5" cy="18.5" r="2.5" />
//       <circle cx="18.5" cy="18.5" r="2.5" />
//     </svg>
//   ),
//   CheckCircle: () => (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
//       <polyline points="22 4 12 14.01 9 11.01" />
//     </svg>
//   ),
//   Rupee: () => (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <path d="M4 10h16" />
//       <path d="M4 14h16" />
//       <path d="M10 3v18" />
//       <path d="M14 3v18" />
//       <path d="M8 7h8" />
//       <path d="M8 17h8" />
//     </svg>
//   ),
//   Cancel: () => (
//     <svg
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <line x1="15" y1="9" x2="9" y2="15" />
//       <line x1="9" y1="9" x2="15" y2="15" />
//     </svg>
//   ),

//   // Task Action Icons
//   Phone: () => (
//     <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
//     </svg>
//   ),
//   MapPin: () => (
//     <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
//       <circle cx="12" cy="10" r="3" />
//     </svg>
//   ),
//   Home: () => (
//     <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
//       <polyline points="9 22 9 12 15 12 15 22" />
//     </svg>
//   ),
//   Hospital: () => (
//     <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
//       <path d="M2 8h16v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8z" />
//       <line x1="6" y1="1" x2="6" y2="4" />
//       <line x1="10" y1="1" x2="10" y2="4" />
//       <line x1="14" y1="1" x2="14" y2="4" />
//     </svg>
//   ),
//   Check: () => (
//     <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="3"
//     >
//       <polyline points="20 6 9 17 4 12" />
//     </svg>
//   ),
//   Info: () => (
//     <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <line x1="12" y1="16" x2="12" y2="12" />
//       <line x1="12" y1="8" x2="12.01" y2="8" />
//     </svg>
//   ),
//   User: () => (
//     <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
//       <circle cx="12" cy="7" r="4" />
//     </svg>
//   ),
//   Calendar: () => (
//     <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
//       <line x1="16" y1="2" x2="16" y2="6" />
//       <line x1="8" y1="2" x2="8" y2="6" />
//       <line x1="3" y1="10" x2="21" y2="10" />
//     </svg>
//   ),
//   Star: ({ filled = true }) => (
//     <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill={filled ? "#FFD700" : "none"}
//       stroke="#FFD700"
//       strokeWidth="2"
//     >
//       <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
//     </svg>
//   ),
//   Distance: () => (
//     <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <polyline points="12 6 12 12 16 14" />
//     </svg>
//   ),
//   Money: () => (
//     <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <line x1="12" y1="1" x2="12" y2="23" />
//       <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
//     </svg>
//   ),
//   Time: () => (
//     <svg
//       width="14"
//       height="14"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <circle cx="12" cy="12" r="10" />
//       <polyline points="12 6 12 12 16 14" />
//     </svg>
//   ),
//   Warning: () => (
//     <svg
//       width="16"
//       height="16"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//     >
//       <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
//       <line x1="12" y1="9" x2="12" y2="13" />
//       <line x1="12" y1="17" x2="12.01" y2="17" />
//     </svg>
//   ),
// };

// const Dashboard = ({
//   profileData,
//   deliveryData,
//   isOnline: propIsOnline,
//   toggleOnlineStatus,
//   setSelectedTask,
//   toggleNotifications,
//   getUnreadCount,
//   toggleAIChat,
//   setActivePage,
// }) => {
//   const [selectedStat, setSelectedStat] = useState(null);
//   const [isOnline, setIsOnline] = useState(false);
//   const [acceptedOrders, setAcceptedOrders] = useState([]);
//   const [completedOrders, setCompletedOrders] = useState([]);
//   const [cancelledOrders, setCancelledOrders] = useState([]);
//   const [availableOrders, setAvailableOrders] = useState([]);
//   const [currentStep, setCurrentStep] = useState("available");
//   const [incentives, setIncentives] = useState({
//     today: 0,
//     weekly: 0,
//     monthly: 0,
//     completedDeliveries: 0,
//     cancelledDeliveries: 0,
//     bonusEligible: false,
//     customerTips: 0,
//     dailyTarget: 300,
//     dailyOrdersCompleted: 0,
//     dailyTargetAchieved: false,
//   });
//   const [showProofModal, setShowProofModal] = useState(false);
//   const [showSuccessModal, setShowSuccessModal] = useState(false);
//   const [showCancelModal, setShowCancelModal] = useState(false);
//   const [showCancelledSuccessModal, setShowCancelledSuccessModal] =
//     useState(false);
//   const [showDetailsModal, setShowDetailsModal] = useState(false);
//   const [currentDeliveryForProof, setCurrentDeliveryForProof] = useState(null);
//   const [orderToCancel, setOrderToCancel] = useState(null);
//   const [selectedTaskDetails, setSelectedTaskDetails] = useState(null);
//   const [customerOTP, setCustomerOTP] = useState("");
//   const [cancelReason, setCancelReason] = useState("");
//   const [lastCancelledOrder, setLastCancelledOrder] = useState(null);

//   const audioRef = useRef(null);
//   const notificationIntervalRef = useRef(null);
//   const otpInputRef = useRef(null);
//   const cancelReasonRef = useRef(null);
//   const [lastDeliveryDetails, setLastDeliveryDetails] = useState(null);

//   // Safe function calls
//   const safeSetActivePage = (page) => {
//     if (typeof setActivePage === "function") {
//       setActivePage(page);
//     }
//   };

//   const safeToggleOnlineStatus = (status) => {
//     if (typeof toggleOnlineStatus === "function") {
//       toggleOnlineStatus(status);
//     }
//   };

//   const safeSetSelectedTask = (task) => {
//     if (typeof setSelectedTask === "function") {
//       setSelectedTask(task);
//     }
//   };

//   const safeToggleNotifications = () => {
//     if (typeof toggleNotifications === "function") {
//       toggleNotifications();
//     }
//   };

//   const safeGetUnreadCount = () => {
//     if (typeof getUnreadCount === "function") {
//       return getUnreadCount();
//     }
//     return 0;
//   };

//   const safeToggleAIChat = () => {
//     if (typeof toggleAIChat === "function") {
//       toggleAIChat();
//     }
//   };

//   // Sync with prop isOnline
//   useEffect(() => {
//     if (propIsOnline !== undefined) {
//       setIsOnline(propIsOnline);
//     }
//   }, [propIsOnline]);

//   // Focus on cancel reason input when modal opens
//   useEffect(() => {
//     if (showCancelModal && cancelReasonRef.current) {
//       setTimeout(() => {
//         cancelReasonRef.current.focus();
//       }, 100);
//     }
//   }, [showCancelModal]);

//   const getCurrentGreeting = () => {
//     const hour = new Date().getHours();
//     if (hour < 12) return "Good Morning";
//     if (hour < 18) return "Good Afternoon";
//     return "Good Evening";
//   };

//   // Check for daily target achievement
//   useEffect(() => {
//     if (completedOrders.length >= 12 && !incentives.dailyTargetAchieved) {
//       setIncentives((prev) => ({
//         ...prev,
//         dailyTargetAchieved: true,
//         today: prev.today + prev.dailyTarget,
//       }));
//     }
//   }, [completedOrders.length, incentives.dailyTargetAchieved]);

//   // Initialize available orders when going online
//   useEffect(() => {
//     if (isOnline) {
//       const initialOrders = [
//         {
//           id: "ORD001",
//           orderId: "MED001",
//           customerName: "Rajesh Kumar",
//           customerPhone: "+91 98765 43210",
//           pharmacyName: "Apollo Pharmacy",
//           pharmacyPhone: "+91 98765 43211",
//           pharmacyLocation: "Apollo Pharmacy, MVP Colony, Visakhapatnam",
//           deliveryLocation: "H-Block, Seethammadhara, Visakhapatnam",
//           estimatedTime: "25 mins",
//           distance: "3.2 km",
//           amount: 45,
//           tip: 10,
//           status: "pending",
//           priority: "High",
//           instructions:
//             "Handle with care. Keep medicines in original packaging.",
//           customerOTP: Math.floor(1000 + Math.random() * 9000).toString(),
//           medicines: [
//             { name: "Paracetamol 500mg", quantity: "1 strip of 10 tablets" },
//             { name: "Cetirizine 10mg", quantity: "1 strip of 10 tablets" },
//             {
//               name: "Vitamin C Supplements",
//               quantity: "1 bottle of 30 tablets",
//             },
//           ],
//           specialInstructions: "Please deliver before 6 PM",
//           paymentMethod: "Cash on Delivery",
//           orderTime: "2:30 PM",
//         },
//       ];
//       setAvailableOrders(initialOrders);
//     } else {
//       // Clear available orders when going offline
//       setAvailableOrders([]);
//     }
//   }, [isOnline]);

//   // Simulate new pharmacy orders when online
//   useEffect(() => {
//     if (
//       !isOnline ||
//       acceptedOrders.length > 0 ||
//       availableOrders.length > 0 ||
//       incentives.dailyTargetAchieved
//     )
//       return;

//     const orderInterval = setInterval(() => {
//       setAvailableOrders((prev) => {
//         if (prev.length >= 1) return prev;

//         const visakhapatnamPharmacies = [
//           {
//             name: "Apollo Pharmacy",
//             phone: "+91 98765 43211",
//             area: "MVP Colony",
//           },
//           {
//             name: "MedPlus Pharmacy",
//             phone: "+91 98765 43213",
//             area: "Dwarakanagar",
//           },
//           {
//             name: "Fortis Pharmacy",
//             phone: "+91 98765 43215",
//             area: "Siripuram",
//           },
//           {
//             name: "Max Healthcare Pharmacy",
//             phone: "+91 98765 43217",
//             area: "Gajuwaka",
//           },
//           {
//             name: "City Pharmacy",
//             phone: "+91 98765 43219",
//             area: "Akkayyapalem",
//           },
//         ];

//         const visakhapatnamAreas = [
//           "MVP Colony",
//           "Dwarakanagar",
//           "Siripuram",
//           "Gajuwaka",
//           "Akkayyapalem",
//           "Seethammadhara",
//           "Madhurawada",
//           "Pendurthi",
//           "Anakapalle",
//           "Bheemili",
//         ];

//         const pharmacy =
//           visakhapatnamPharmacies[
//             Math.floor(Math.random() * visakhapatnamPharmacies.length)
//           ];
//         const deliveryArea = visakhapatnamAreas.filter(
//           (a) => a !== pharmacy.area
//         )[Math.floor(Math.random() * (visakhapatnamAreas.length - 1))];

//         const tipAmount =
//           Math.random() > 0.3 ? Math.floor(Math.random() * 30) + 5 : 0;
//         const medicineList = [
//           [
//             { name: "Paracetamol 500mg", quantity: "1 strip" },
//             { name: "Cetirizine 10mg", quantity: "1 strip" },
//           ],
//           [
//             { name: "Amoxicillin 500mg", quantity: "10 capsules" },
//             { name: "Vitamin D3", quantity: "1 bottle" },
//           ],
//           [
//             { name: "Ibuprofen 400mg", quantity: "1 strip" },
//             { name: "ORS Packets", quantity: "5 packets" },
//           ],
//           [
//             { name: "Azithromycin 500mg", quantity: "3 tablets" },
//             { name: "Cough Syrup", quantity: "1 bottle" },
//           ],
//         ];

//         const newOrder = {
//           id: `ORD${Date.now()}`,
//           orderId: `MED${Date.now().toString().slice(-4)}`,
//           customerName: [
//             "Amit Sharma",
//             "Neha Gupta",
//             "Rohit Verma",
//             "Sneha Patel",
//           ][Math.floor(Math.random() * 4)],
//           customerPhone: `+91 9${Math.floor(
//             10000000 + Math.random() * 90000000
//           )}`,
//           pharmacyName: pharmacy.name,
//           pharmacyPhone: pharmacy.phone,
//           pharmacyLocation: `${pharmacy.name}, ${pharmacy.area}, Visakhapatnam`,
//           deliveryLocation: `${deliveryArea}, Visakhapatnam`,
//           estimatedTime: `${20 + Math.floor(Math.random() * 20)} mins`,
//           distance: `${(2 + Math.random() * 4).toFixed(1)} km`,
//           amount: 30 + Math.floor(Math.random() * 50),
//           tip: tipAmount,
//           status: "pending",
//           priority: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)],
//           instructions:
//             "Handle with care. Keep medicines in original packaging.",
//           customerOTP: Math.floor(1000 + Math.random() * 9000).toString(),
//           medicines:
//             medicineList[Math.floor(Math.random() * medicineList.length)],
//           specialInstructions: [
//             "Call before delivery",
//             "Leave at doorstep",
//             "Ring bell twice",
//           ][Math.floor(Math.random() * 3)],
//           paymentMethod: ["Cash on Delivery", "Online Paid"][
//             Math.floor(Math.random() * 2)
//           ],
//           orderTime: new Date().toLocaleTimeString([], {
//             hour: "2-digit",
//             minute: "2-digit",
//           }),
//         };

//         return [newOrder];
//       });
//     }, 30000);

//     return () => clearInterval(orderInterval);
//   }, [
//     isOnline,
//     acceptedOrders.length,
//     availableOrders.length,
//     incentives.dailyTargetAchieved,
//   ]);

//   // Notification sound system when online
//   useEffect(() => {
//     if (
//       isOnline &&
//       availableOrders.length > 0 &&
//       acceptedOrders.length === 0 &&
//       !incentives.dailyTargetAchieved
//     ) {
//       notificationIntervalRef.current = setInterval(() => {
//         if (audioRef.current) {
//           audioRef.current
//             .play()
//             .catch((e) => console.log("Audio play failed:", e));
//         }
//       }, 5000);

//       return () => {
//         if (notificationIntervalRef.current) {
//           clearInterval(notificationIntervalRef.current);
//         }
//       };
//     } else {
//       if (notificationIntervalRef.current) {
//         clearInterval(notificationIntervalRef.current);
//       }
//     }
//   }, [
//     isOnline,
//     availableOrders.length,
//     acceptedOrders.length,
//     incentives.dailyTargetAchieved,
//   ]);

//   // Focus OTP input when proof modal opens
//   useEffect(() => {
//     if (showProofModal && otpInputRef.current) {
//       setTimeout(() => {
//         otpInputRef.current.focus();
//       }, 100);
//     }
//   }, [showProofModal]);

//   const formatIndianCurrency = (amount) => {
//     return `₹${amount.toLocaleString("en-IN")}`;
//   };

//   const getDisplayName = () => {
//     return profileData?.fullName?.split(" ")[0] || "User";
//   };

//   const getPriorityColor = (priority) => {
//     switch (priority) {
//       case "High":
//         return "#EF4444";
//       case "Medium":
//         return "#F59E0B";
//       case "Low":
//         return "#10B981";
//       default:
//         return "#4F6F6B";
//     }
//   };

//   const getStatusColor = (status) => {
//     switch (status) {
//       case "pending":
//         return "#F59E0B";
//       case "assigned":
//         return "#F59E0B";
//       case "pickup_reached":
//         return "#3B82F6";
//       case "pickup_completed":
//         return "#8B5CF6";
//       case "delivery_reached":
//         return "#F59E0B";
//       case "delivery_completed":
//         return "#10B981";
//       case "cancelled":
//         return "#EF4444";
//       default:
//         return "#4F6F6B";
//     }
//   };

//   const handleViewAllTasks = () => {
//     safeSetActivePage("delivery-history");
//   };

//   const handleStatClick = (statKey) => {
//     if (selectedStat === statKey) {
//       setSelectedStat(null);
//     } else {
//       setSelectedStat(statKey);
//     }
//   };

//   const handleToggleOnline = () => {
//     const newOnlineStatus = !isOnline;
//     setIsOnline(newOnlineStatus);

//     if (newOnlineStatus) {
//       setSelectedStat(null);
//       setCurrentStep("available");
//       const initialOrders = [
//         {
//           id: "ORD001",
//           orderId: "MED001",
//           customerName: "Rajesh Kumar",
//           customerPhone: "+91 98765 43210",
//           pharmacyName: "Apollo Pharmacy",
//           pharmacyPhone: "+91 98765 43211",
//           pharmacyLocation: "Apollo Pharmacy, MVP Colony, Visakhapatnam",
//           deliveryLocation: "H-Block, Seethammadhara, Visakhapatnam",
//           estimatedTime: "25 mins",
//           distance: "3.2 km",
//           amount: 45,
//           tip: 10,
//           status: "pending",
//           priority: "High",
//           instructions:
//             "Handle with care. Keep medicines in original packaging.",
//           customerOTP: Math.floor(1000 + Math.random() * 9000).toString(),
//           medicines: [
//             { name: "Paracetamol 500mg", quantity: "1 strip of 10 tablets" },
//             { name: "Cetirizine 10mg", quantity: "1 strip of 10 tablets" },
//             {
//               name: "Vitamin C Supplements",
//               quantity: "1 bottle of 30 tablets",
//             },
//           ],
//           specialInstructions: "Please deliver before 6 PM",
//           paymentMethod: "Cash on Delivery",
//           orderTime: "2:30 PM",
//         },
//       ];
//       setAvailableOrders(initialOrders);
//     } else {
//       // Don't clear accepted orders when going offline
//       // Keep the current state but stop notifications
//       if (notificationIntervalRef.current) {
//         clearInterval(notificationIntervalRef.current);
//       }
//     }

//     safeToggleOnlineStatus(newOnlineStatus);
//   };

//   const handleAcceptOrder = (order) => {
//     if (notificationIntervalRef.current) {
//       clearInterval(notificationIntervalRef.current);
//     }

//     const acceptedOrder = {
//       ...order,
//       status: "assigned",
//       acceptedAt: new Date(),
//     };

//     setAcceptedOrders([acceptedOrder]);
//     setAvailableOrders([]);
//     setCurrentStep("accepted");
//   };

//   const handleCancelAvailableOrder = (order) => {
//     setOrderToCancel(order);
//     setCancelReason("");
//     setShowCancelModal(true);
//   };

//   const handleReachedPharmacy = (order) => {
//     setAcceptedOrders((prev) =>
//       prev.map((o) =>
//         o.id === order.id
//           ? { ...o, status: "pickup_reached", pharmacyReachedAt: new Date() }
//           : o
//       )
//     );
//     setCurrentStep("pickup_reached");
//   };

//   const handlePickupCompleted = (order) => {
//     setAcceptedOrders((prev) =>
//       prev.map((o) =>
//         o.id === order.id
//           ? { ...o, status: "pickup_completed", pickupCompletedAt: new Date() }
//           : o
//       )
//     );
//     setCurrentStep("pickup_completed");
//   };

//   const handleReachedCustomer = (order) => {
//     setAcceptedOrders((prev) =>
//       prev.map((o) =>
//         o.id === order.id
//           ? { ...o, status: "delivery_reached", customerReachedAt: new Date() }
//           : o
//       )
//     );
//     setCurrentStep("delivery_reached");
//   };

//   const handleOpenProofModal = (order) => {
//     setCurrentDeliveryForProof(order);
//     setShowProofModal(true);
//   };

//   const handleOTPChange = (e) => {
//     const value = e.target.value.replace(/\D/g, "");
//     if (value.length <= 4) {
//       setCustomerOTP(value);
//     }
//   };

//   const handleSubmitProof = () => {
//     if (!customerOTP || customerOTP.length !== 4) {
//       return;
//     }

//     const deliveredOrder = {
//       ...currentDeliveryForProof,
//       status: "delivery_completed",
//       deliveredAt: new Date(),
//       proofOTP: customerOTP,
//       deliveryDate: new Date().toISOString().split("T")[0],
//       completedTime: new Date().toLocaleTimeString(),
//       rating: Math.floor(Math.random() * 2) + 4,
//       feedback:
//         Math.random() > 0.5
//           ? "Great service! Very professional and on time."
//           : "Excellent delivery service!",
//     };

//     setCompletedOrders((prev) => [...prev, deliveredOrder]);
//     setAcceptedOrders([]);
//     setCurrentStep("available");

//     setIncentives((prev) => ({
//       ...prev,
//       completedDeliveries: prev.completedDeliveries + 1,
//       dailyOrdersCompleted: prev.dailyOrdersCompleted + 1,
//       today:
//         prev.today +
//         currentDeliveryForProof.amount +
//         (currentDeliveryForProof.tip || 0),
//       weekly:
//         prev.weekly +
//         currentDeliveryForProof.amount +
//         (currentDeliveryForProof.tip || 0),
//       monthly:
//         prev.monthly +
//         currentDeliveryForProof.amount +
//         (currentDeliveryForProof.tip || 0),
//       customerTips: prev.customerTips + (currentDeliveryForProof.tip || 0),
//       bonusEligible: prev.dailyOrdersCompleted + 1 >= 5,
//     }));

//     setLastDeliveryDetails({
//       orderId: currentDeliveryForProof.orderId,
//       amount: currentDeliveryForProof.amount,
//       tip: currentDeliveryForProof.tip || 0,
//       customerName: currentDeliveryForProof.customerName,
//       deliveryLocation: currentDeliveryForProof.deliveryLocation,
//     });

//     setShowProofModal(false);
//     setShowSuccessModal(true);
//     setCurrentDeliveryForProof(null);
//     setCustomerOTP("");
//   };

//   const handleCloseSuccessModal = () => {
//     setShowSuccessModal(false);
//     setLastDeliveryDetails(null);
//   };

//   const handleCancelOrder = (order) => {
//     setOrderToCancel(order);
//     setCancelReason("");
//     setShowCancelModal(true);
//   };

//   const handleConfirmCancel = () => {
//     if (!orderToCancel) return;

//     const cancelledOrder = {
//       ...orderToCancel,
//       status: "cancelled",
//       cancelledAt: new Date(),
//       cancelReason: cancelReason || "No reason provided",
//       cancelledBy: "delivery_partner",
//     };

//     setCancelledOrders((prev) => [...prev, cancelledOrder]);

//     setIncentives((prev) => ({
//       ...prev,
//       cancelledDeliveries: prev.cancelledDeliveries + 1,
//     }));

//     if (acceptedOrders.some((order) => order.id === orderToCancel.id)) {
//       setAcceptedOrders((prev) =>
//         prev.filter((o) => o.id !== orderToCancel.id)
//       );
//       setCurrentStep("available");
//     } else {
//       setAvailableOrders((prev) =>
//         prev.filter((o) => o.id !== orderToCancel.id)
//       );
//     }

//     setLastCancelledOrder({
//       orderId: orderToCancel.orderId,
//       customerName: orderToCancel.customerName,
//       amount: orderToCancel.amount,
//       tip: orderToCancel.tip || 0,
//       cancelReason: cancelReason || "No reason provided",
//       cancelledTime: new Date().toLocaleTimeString(),
//     });

//     setShowCancelModal(false);
//     setShowCancelledSuccessModal(true);
//     setOrderToCancel(null);
//     setCancelReason("");
//   };

//   const handleCloseCancelledSuccessModal = () => {
//     setShowCancelledSuccessModal(false);
//     setLastCancelledOrder(null);
//   };

//   const handleCallPharmacy = (phoneNumber) => {
//     window.open(`tel:${phoneNumber}`, "_self");
//   };

//   const handleCallCustomer = (phoneNumber) => {
//     window.open(`tel:${phoneNumber}`, "_self");
//   };

//   const handleGetDirections = (location, isCustomer = false) => {
//     const locationWithCity = `${location}, Visakhapatnam, Andhra Pradesh`;
//     const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
//       locationWithCity
//     )}`;
//     window.open(mapsUrl, "_blank");
//   };

//   const handleViewDetails = (task) => {
//     setSelectedTaskDetails(task);
//     setShowDetailsModal(true);
//   };

//   const handleCloseDetailsModal = () => {
//     setShowDetailsModal(false);
//     setSelectedTaskDetails(null);
//   };

//   const getMedicines = (task) => {
//     return task?.medicines || [];
//   };

//   const getProgressSteps = () => {
//     const steps = [
//       { label: "Order Accepted", key: "accepted" },
//       { label: "Reached Pharmacy", key: "pickup_reached" },
//       { label: "Pickup Completed", key: "pickup_completed" },
//       { label: "Reached Customer", key: "delivery_reached" },
//       { label: "Delivery Completed", key: "proof_submitted" },
//     ];

//     const currentIndex = steps.findIndex((step) => step.key === currentStep);

//     return steps.map((step, index) => {
//       const isCompleted = index < currentIndex;
//       const isActive = step.key === currentStep;

//       return (
//         <React.Fragment key={step.key}>
//           {index > 0 && (
//             <div
//               className={`progress-line ${isOnline ? "online" : "offline"} ${
//                 isCompleted ? "completed" : ""
//               } ${index <= currentIndex ? "active" : ""}`}
//             />
//           )}
//           <div className="progress-step">
//             <div
//               className={`progress-dot ${isOnline ? "online" : "offline"} ${
//                 isActive ? "active" : ""
//               } ${isCompleted ? "completed" : ""}`}
//             />
//             <div
//               className={`progress-label ${isOnline ? "online" : "offline"} ${
//                 isActive ? "active" : ""
//               }`}
//             >
//               {step.label}
//             </div>
//           </div>
//         </React.Fragment>
//       );
//     });
//   };

//   // Proof of Delivery Modal
//   const ProofModal = () => {
//     if (!showProofModal) return null;

//     return (
//       <div className="proof-modal">
//         <div
//           className={`proof-modal-content ${isOnline ? "online" : "offline"}`}
//         >
//           <h2
//             className={`proof-modal-title ${isOnline ? "online" : "offline"}`}
//           >
//             <SvgIcons.Check /> Complete Delivery
//           </h2>

//           <div className="scrollable-content">
//             <div className="proof-section">
//               <label
//                 className={`proof-label ${isOnline ? "online" : "offline"}`}
//               >
//                 <SvgIcons.Info /> Enter Customer OTP to Confirm Delivery
//               </label>
//               <div className="otp-input-container">
//                 <input
//                   ref={otpInputRef}
//                   type="text"
//                   inputMode="numeric"
//                   pattern="[0-9]*"
//                   placeholder="Enter 4-digit OTP"
//                   value={customerOTP}
//                   onChange={handleOTPChange}
//                   maxLength={4}
//                   className={`proof-input ${isOnline ? "online" : "offline"}`}
//                   autoFocus
//                 />
//                 {customerOTP.length > 0 && customerOTP.length !== 4 && (
//                   <p className="otp-error-message">
//                     Please enter exactly 4 digits
//                   </p>
//                 )}
//                 <p className={`otp-hint ${isOnline ? "online" : "offline"}`}>
//                   Ask customer for OTP or use:{" "}
//                   <strong>{currentDeliveryForProof?.customerOTP}</strong>
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="proof-buttons">
//             <button
//               className={`proof-cancel-button ${
//                 isOnline ? "online" : "offline"
//               }`}
//               onClick={() => {
//                 setShowProofModal(false);
//                 setCurrentDeliveryForProof(null);
//                 setCustomerOTP("");
//               }}
//             >
//               Cancel
//             </button>
//             <button
//               className="proof-submit-button"
//               onClick={handleSubmitProof}
//               disabled={customerOTP.length !== 4}
//             >
//               <SvgIcons.Check /> Confirm Delivery
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Success Modal after delivery
//   const SuccessModal = () => {
//     if (!showSuccessModal || !lastDeliveryDetails) return null;

//     return (
//       <div className="success-modal">
//         <div className="success-modal-content">
//           <div className="success-icon">🎉</div>
//           <h2 className="success-title">Delivery Successful!</h2>
//           <p className="success-message">
//             Your delivery has been completed successfully.
//           </p>

//           <div className="success-details">
//             <p className="success-detail-item">
//               <strong>Order ID:</strong> {lastDeliveryDetails.orderId}
//             </p>
//             <p className="success-detail-item">
//               <strong>Customer:</strong> {lastDeliveryDetails.customerName}
//             </p>
//             <p className="success-detail-item">
//               <strong>Delivery Amount:</strong>{" "}
//               {formatIndianCurrency(lastDeliveryDetails.amount)}
//             </p>
//             {lastDeliveryDetails.tip > 0 && (
//               <p className="success-detail-item" style={{ color: "#10B981" }}>
//                 <strong>Tip Received:</strong>{" "}
//                 {formatIndianCurrency(lastDeliveryDetails.tip)}
//               </p>
//             )}
//           </div>

//           <button
//             className="success-ok-button"
//             onClick={handleCloseSuccessModal}
//           >
//             Continue Delivering
//           </button>
//         </div>
//       </div>
//     );
//   };

//   // Cancel Order Modal
//   const CancelModal = () => {
//     if (!showCancelModal || !orderToCancel) return null;

//     return (
//       <div className="proof-modal">
//         <div
//           className={`proof-modal-content ${isOnline ? "online" : "offline"}`}
//         >
//           <h2
//             className={`proof-modal-title ${isOnline ? "online" : "offline"}`}
//           >
//             <SvgIcons.Cancel /> Cancel Order
//           </h2>

//           <div className="scrollable-content">
//             <div className="cancel-warning">
//               <div className="warning-icon">⚠️</div>
//               <p className="warning-text">
//                 Are you sure you want to cancel order{" "}
//                 <strong>{orderToCancel.orderId}</strong>?
//                 {acceptedOrders.some(
//                   (order) => order.id === orderToCancel.id
//                 ) && " This will cancel your current delivery."}
//               </p>
//             </div>

//             <div className="proof-section">
//               <label
//                 className={`proof-label ${isOnline ? "online" : "offline"}`}
//               >
//                 Reason for cancellation (optional)
//               </label>
//               <select
//                 ref={cancelReasonRef}
//                 className={`proof-input ${isOnline ? "online" : "offline"}`}
//                 value={cancelReason}
//                 onChange={(e) => setCancelReason(e.target.value)}
//               >
//                 <option value="">Select a reason</option>
//                 <option value="Customer Requested">Customer Requested</option>
//                 <option value="Pharmacy Closed">Pharmacy Closed</option>
//                 <option value="Location Too Far">Location Too Far</option>
//                 <option value="Technical Issue">Technical Issue</option>
//                 <option value="Personal Reason">Personal Reason</option>
//                 <option value="Other">Other Reason</option>
//               </select>

//               {cancelReason === "Other" && (
//                 <input
//                   type="text"
//                   placeholder="Please specify reason"
//                   className={`proof-input ${isOnline ? "online" : "offline"}`}
//                   style={{ marginTop: "10px" }}
//                   value={cancelReason === "Other" ? "" : cancelReason}
//                   onChange={(e) => setCancelReason(e.target.value)}
//                 />
//               )}
//             </div>

//             <div className="order-info">
//               <h4 className="order-info-title">Order Details:</h4>
//               <p>
//                 <strong>Order ID:</strong> {orderToCancel.orderId}
//               </p>
//               <p>
//                 <strong>Customer:</strong> {orderToCancel.customerName}
//               </p>
//               <p>
//                 <strong>Amount:</strong>{" "}
//                 {formatIndianCurrency(orderToCancel.amount)}
//               </p>
//               {orderToCancel.tip > 0 && (
//                 <p>
//                   <strong>Tip:</strong>{" "}
//                   {formatIndianCurrency(orderToCancel.tip)}
//                 </p>
//               )}
//               <p>
//                 <strong>Status:</strong>
//                 <span
//                   style={{
//                     color: getStatusColor(orderToCancel.status),
//                     marginLeft: "8px",
//                     fontWeight: "600",
//                   }}
//                 >
//                   {orderToCancel.status.replace("_", " ").toUpperCase()}
//                 </span>
//               </p>
//             </div>

//             <div className="cancellation-notice">
//               <SvgIcons.Warning />
//               <span className="notice-text">
//                 Note: Cancelling orders may affect your delivery rating.
//               </span>
//             </div>
//           </div>

//           <div className="proof-buttons">
//             <button
//               className={`proof-cancel-button ${
//                 isOnline ? "online" : "offline"
//               }`}
//               onClick={() => {
//                 setShowCancelModal(false);
//                 setOrderToCancel(null);
//                 setCancelReason("");
//               }}
//             >
//               Go Back
//             </button>
//             <button
//               className="cancel-confirm-button"
//               onClick={handleConfirmCancel}
//             >
//               <SvgIcons.Cancel /> Confirm Cancellation
//             </button>
//           </div>
//         </div>
//       </div>
//     );
//   };

//   // Cancellation Success Modal
//   const CancelledSuccessModal = () => {
//     if (!showCancelledSuccessModal || !lastCancelledOrder) return null;

//     return (
//       <div className="cancelled-success-modal">
//         <div className="cancelled-success-modal-content">
//           <div className="cancelled-success-icon">
//             <SvgIcons.Cancel />
//           </div>
//           <h2 className="cancelled-success-title">Order Cancelled</h2>
//           <p className="cancelled-success-message">
//             Order has been successfully cancelled.
//           </p>

//           <div className="cancelled-success-details">
//             <p className="cancelled-success-detail-item">
//               <strong>Order ID:</strong> {lastCancelledOrder.orderId}
//             </p>
//             <p className="cancelled-success-detail-item">
//               <strong>Customer:</strong> {lastCancelledOrder.customerName}
//             </p>
//             <p className="cancelled-success-detail-item">
//               <strong>Amount:</strong>{" "}
//               {formatIndianCurrency(lastCancelledOrder.amount)}
//             </p>
//             {lastCancelledOrder.tip > 0 && (
//               <p className="cancelled-success-detail-item">
//                 <strong>Tip Lost:</strong>{" "}
//                 {formatIndianCurrency(lastCancelledOrder.tip)}
//               </p>
//             )}
//             <p className="cancelled-success-detail-item">
//               <strong>Reason:</strong> {lastCancelledOrder.cancelReason}
//             </p>
//             <p className="cancelled-success-detail-item">
//               <strong>Cancelled At:</strong> {lastCancelledOrder.cancelledTime}
//             </p>
//           </div>

//           <div className="cancelled-stats-update">
//             <p className="stats-update-text">
//               <strong>Cancelled Orders Today:</strong> {cancelledOrders.length}
//             </p>
//             <p className="stats-update-text">
//               <strong>Cancellation Rate:</strong>{" "}
//               {(
//                 (cancelledOrders.length /
//                   (completedOrders.length +
//                     cancelledOrders.length +
//                     acceptedOrders.length)) *
//                 100
//               ).toFixed(1)}
//               %
//             </p>
//           </div>

//           <button
//             className="cancelled-success-ok-button"
//             onClick={handleCloseCancelledSuccessModal}
//           >
//             Continue
//           </button>
//         </div>
//       </div>
//     );
//   };

//   // Details Modal
//   const DetailsModal = () => {
//     if (!showDetailsModal || !selectedTaskDetails) return null;

//     const task = selectedTaskDetails;

//     return (
//       <div className="details-modal">
//         <div
//           className={`details-modal-content ${isOnline ? "online" : "offline"}`}
//         >
//           <h2
//             className={`details-modal-title ${isOnline ? "online" : "offline"}`}
//           >
//             <SvgIcons.Info /> Order Details
//           </h2>

//           <div className="scrollable-content">
//             <div className="details-section">
//               <h3
//                 className={`details-section-title ${
//                   isOnline ? "online" : "offline"
//                 }`}
//               >
//                 📦 Order Information
//               </h3>
//               <div className="details-grid">
//                 <div className="detail-item">
//                   <span
//                     className={`detail-label ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     <SvgIcons.Info /> Order ID
//                   </span>
//                   <span
//                     className={`detail-value ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     {task.orderId}
//                   </span>
//                 </div>
//                 <div className="detail-item">
//                   <span
//                     className={`detail-label ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     Status
//                   </span>
//                   <span
//                     className={`detail-value ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                     style={{ color: getStatusColor(task.status) }}
//                   >
//                     {task.status.replace("_", " ").toUpperCase()}
//                   </span>
//                 </div>
//                 <div className="detail-item">
//                   <span
//                     className={`detail-label ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     Priority
//                   </span>
//                   <span
//                     className={`detail-value ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                     style={{ color: getPriorityColor(task.priority) }}
//                   >
//                     {task.priority}
//                   </span>
//                 </div>
//                 <div className="detail-item">
//                   <span
//                     className={`detail-label ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     <SvgIcons.Calendar /> Order Time
//                   </span>
//                   <span
//                     className={`detail-value ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     {task.orderTime || "2:30 PM"}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="details-section">
//               <h3
//                 className={`details-section-title ${
//                   isOnline ? "online" : "offline"
//                 }`}
//               >
//                 <SvgIcons.User /> Customer Details
//               </h3>
//               <div className="details-grid">
//                 <div className="detail-item">
//                   <span
//                     className={`detail-label ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     Name
//                   </span>
//                   <span
//                     className={`detail-value ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     {task.customerName}
//                   </span>
//                 </div>
//                 <div className="detail-item">
//                   <span
//                     className={`detail-label ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     <SvgIcons.Phone /> Phone
//                   </span>
//                   <span
//                     className={`detail-value ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     {task.customerPhone}
//                   </span>
//                 </div>
//                 <div className="detail-item">
//                   <span
//                     className={`detail-label ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     <SvgIcons.Home /> Location
//                   </span>
//                   <span
//                     className={`detail-value ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     {task.deliveryLocation}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="details-section">
//               <h3
//                 className={`details-section-title ${
//                   isOnline ? "online" : "offline"
//                 }`}
//               >
//                 <SvgIcons.Hospital /> Pharmacy Details
//               </h3>
//               <div className="details-grid">
//                 <div className="detail-item">
//                   <span
//                     className={`detail-label ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     Name
//                   </span>
//                   <span
//                     className={`detail-value ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     {task.pharmacyName}
//                   </span>
//                 </div>
//                 <div className="detail-item">
//                   <span
//                     className={`detail-label ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     <SvgIcons.Phone /> Phone
//                   </span>
//                   <span
//                     className={`detail-value ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     {task.pharmacyPhone}
//                   </span>
//                 </div>
//                 <div className="detail-item">
//                   <span
//                     className={`detail-label ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     Location
//                   </span>
//                   <span
//                     className={`detail-value ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     {task.pharmacyLocation}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {task.medicines && task.medicines.length > 0 && (
//               <div className="details-section">
//                 <h3
//                   className={`details-section-title ${
//                     isOnline ? "online" : "offline"
//                   }`}
//                 >
//                   💊 Medicines
//                 </h3>
//                 {getMedicines(task).map((medicine, index) => (
//                   <div
//                     key={index}
//                     className={`medicine-detail-item ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     <h4
//                       className={`medicine-name ${
//                         isOnline ? "online" : "offline"
//                       }`}
//                     >
//                       <SvgIcons.Info /> {medicine.name}
//                     </h4>
//                     <p
//                       className={`medicine-quantity ${
//                         isOnline ? "online" : "offline"
//                       }`}
//                     >
//                       Quantity: {medicine.quantity}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             )}

//             <div className="details-section">
//               <h3
//                 className={`details-section-title ${
//                   isOnline ? "online" : "offline"
//                 }`}
//               >
//                 <SvgIcons.Money /> Payment Details
//               </h3>
//               <div className="details-grid">
//                 <div className="detail-item">
//                   <span
//                     className={`detail-label ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     Amount
//                   </span>
//                   <span
//                     className={`detail-value ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     {formatIndianCurrency(task.amount)}
//                   </span>
//                 </div>
//                 <div className="detail-item">
//                   <span
//                     className={`detail-label ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     Tip
//                   </span>
//                   <span
//                     className={`detail-value ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                     style={{ color: "#10B981" }}
//                   >
//                     {formatIndianCurrency(task.tip || 0)}
//                   </span>
//                 </div>
//                 <div className="detail-item">
//                   <span
//                     className={`detail-label ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     Payment Method
//                   </span>
//                   <span
//                     className={`detail-value ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     {task.paymentMethod || "Cash on Delivery"}
//                   </span>
//                 </div>
//                 <div className="detail-item">
//                   <span
//                     className={`detail-label ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     <SvgIcons.Time /> Estimated Time
//                   </span>
//                   <span
//                     className={`detail-value ${
//                       isOnline ? "online" : "offline"
//                     }`}
//                   >
//                     {task.estimatedTime}
//                   </span>
//                 </div>
//               </div>
//             </div>

//             <div className="details-section">
//               <h3
//                 className={`details-section-title ${
//                   isOnline ? "online" : "offline"
//                 }`}
//               >
//                 📝 Instructions
//               </h3>
//               <p
//                 className={`detail-value ${isOnline ? "online" : "offline"}`}
//                 style={{ fontSize: "12px" }}
//               >
//                 {task.instructions}
//               </p>
//               {task.specialInstructions && (
//                 <p
//                   className={`detail-value ${isOnline ? "online" : "offline"}`}
//                   style={{
//                     fontSize: "12px",
//                     color: "#009688",
//                     marginTop: "8px",
//                   }}
//                 >
//                   <strong>Special Instructions:</strong>{" "}
//                   {task.specialInstructions}
//                 </p>
//               )}
//             </div>
//           </div>

//           <button
//             className="details-close-button"
//             onClick={handleCloseDetailsModal}
//           >
//             Close
//           </button>
//         </div>
//       </div>
//     );
//   };

//   return (
//     <div
//       className={`dashboard-main-content ${isOnline ? "online" : "offline"}`}
//     >
//       <audio ref={audioRef} src="/Audio.mp4" preload="auto" />
//       <ProofModal />
//       <SuccessModal />
//       <CancelModal />
//       <CancelledSuccessModal />
//       <DetailsModal />

//       <div className="dashboard-header">
//         <div>
//           <h1 className={`greeting-text ${isOnline ? "online" : "offline"}`}>
//             {getCurrentGreeting()}, {getDisplayName()}
//           </h1>
//           <p className={`subtitle-text ${isOnline ? "online" : "offline"}`}>
//             {isOnline
//               ? "Here's your delivery overview for today"
//               : "You are currently offline - Go online to receive delivery requests"}
//           </p>
//         </div>
//         <div className="dashboard-header-actions">
//           <div
//             className={`online-status-container ${
//               isOnline ? "online" : "offline"
//             }`}
//           >
//             <span
//               className={`status-dot ${isOnline ? "online" : "offline"}`}
//             ></span>
//             <span className={`status-text ${isOnline ? "online" : "offline"}`}>
//               {isOnline ? "Online" : "Offline"}
//             </span>
//             <button
//               className={`status-toggle-button ${
//                 isOnline ? "online" : "offline"
//               }`}
//               onClick={handleToggleOnline}
//             >
//               {isOnline ? "Go Offline" : "Go Online"}
//             </button>
//           </div>
//           <div className={`date-display ${isOnline ? "online" : "offline"}`}>
//             {new Date().toLocaleDateString("en-US", {
//               weekday: "short",
//               year: "numeric",
//               month: "short",
//               day: "numeric",
//             })}
//           </div>
//           <div className="dashboard-action-buttons">
//             <button
//               className={`notification-button ${
//                 isOnline ? "online" : "offline"
//               }`}
//               onClick={safeToggleNotifications}
//             >
//               <SvgIcons.Bell />
//               {safeGetUnreadCount() > 0 && (
//                 <span className="notification-badge">
//                   {safeGetUnreadCount()}
//                 </span>
//               )}
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Incentives Section - Always Visible */}
//       <div className={`incentives-section ${isOnline ? "online" : "offline"}`}>
//         <div className="incentives-header">
//           <h2 className={`section-title ${isOnline ? "online" : "offline"}`}>
//             Your Earnings & Performance
//           </h2>
//           {cancelledOrders.length > 0 && (
//             <div className="performance-warning">
//               <SvgIcons.Warning />
//               <span>Cancellations: {cancelledOrders.length}</span>
//             </div>
//           )}
//         </div>
//         <div className="incentives-grid">
//           <div className={`incentive-card ${isOnline ? "online" : "offline"}`}>
//             <h3
//               className={`incentive-amount ${isOnline ? "online" : "offline"}`}
//             >
//               {formatIndianCurrency(incentives.today)}
//             </h3>
//             <p className={`incentive-label ${isOnline ? "online" : "offline"}`}>
//               Today's Earnings
//             </p>
//             {incentives.customerTips > 0 && (
//               <p
//                 className={`incentive-label ${isOnline ? "online" : "offline"}`}
//                 style={{ fontSize: "11px", marginTop: "4px" }}
//               >
//                 Includes {formatIndianCurrency(incentives.customerTips)} tips
//               </p>
//             )}
//           </div>
//           <div className={`incentive-card ${isOnline ? "online" : "offline"}`}>
//             <h3
//               className={`incentive-amount ${isOnline ? "online" : "offline"}`}
//             >
//               {incentives.completedDeliveries}
//             </h3>
//             <p className={`incentive-label ${isOnline ? "online" : "offline"}`}>
//               Completed
//             </p>
//             {incentives.bonusEligible && (
//               <span className="bonus-badge">Bonus Eligible</span>
//             )}
//           </div>
//           <div className={`incentive-card ${isOnline ? "online" : "offline"}`}>
//             <h3
//               className={`incentive-amount ${isOnline ? "online" : "offline"}`}
//             >
//               {availableOrders.length}
//             </h3>
//             <p className={`incentive-label ${isOnline ? "online" : "offline"}`}>
//               Available
//             </p>
//           </div>
//           <div className={`incentive-card ${isOnline ? "online" : "offline"}`}>
//             <h3
//               className={`incentive-amount ${isOnline ? "online" : "offline"}`}
//               style={{ color: "#EF4444" }}
//             >
//               {incentives.cancelledDeliveries}
//               {cancelledOrders.length > 0 && (
//                 <span className="cancelled-badge">
//                   Today: {cancelledOrders.length}
//                 </span>
//               )}
//             </h3>
//             <p className={`incentive-label ${isOnline ? "online" : "offline"}`}>
//               Cancelled
//             </p>
//             {cancelledOrders.length > 0 && (
//               <p
//                 className={`incentive-label ${isOnline ? "online" : "offline"}`}
//                 style={{ fontSize: "11px", marginTop: "4px", color: "#EF4444" }}
//               >
//                 {(
//                   (cancelledOrders.length /
//                     (completedOrders.length +
//                       cancelledOrders.length +
//                       acceptedOrders.length)) *
//                   100
//                 ).toFixed(1)}
//                 % rate
//               </p>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* Real-time Stats Grid - Always Visible */}
//       <div className="stats-grid">
//         <div
//           className={`stat-card ${isOnline ? "online" : "offline"} ${
//             selectedStat === "totalToday" ? "active" : ""
//           }`}
//           onClick={() => handleStatClick("totalToday")}
//         >
//           <div className={`stat-icon ${isOnline ? "online" : "offline"}`}>
//             <SvgIcons.Package />
//           </div>
//           <div className="stat-content">
//             <h3 className={`stat-number ${isOnline ? "online" : "offline"}`}>
//               {completedOrders.length +
//                 acceptedOrders.length +
//                 cancelledOrders.length}
//             </h3>
//             <p className={`stat-label ${isOnline ? "online" : "offline"}`}>
//               Total Orders Today
//             </p>
//           </div>
//         </div>

//         <div
//           className={`stat-card ${isOnline ? "online" : "offline"} ${
//             selectedStat === "pending" ? "active" : ""
//           }`}
//           onClick={() => handleStatClick("pending")}
//         >
//           <div className={`stat-icon ${isOnline ? "online" : "offline"}`}>
//             <SvgIcons.Clock />
//           </div>
//           <div className="stat-content">
//             <h3 className={`stat-number ${isOnline ? "online" : "offline"}`}>
//               {availableOrders.length}
//             </h3>
//             <p className={`stat-label ${isOnline ? "online" : "offline"}`}>
//               Available Orders
//             </p>
//           </div>
//         </div>

//         <div
//           className={`stat-card ${isOnline ? "online" : "offline"} ${
//             selectedStat === "inProgress" ? "active" : ""
//           }`}
//           onClick={() => handleStatClick("inProgress")}
//         >
//           <div className={`stat-icon ${isOnline ? "online" : "offline"}`}>
//             <SvgIcons.Truck />
//           </div>
//           <div className="stat-content">
//             <h3 className={`stat-number ${isOnline ? "online" : "offline"}`}>
//               {acceptedOrders.filter((o) => o.status !== "assigned").length}
//             </h3>
//             <p className={`stat-label ${isOnline ? "online" : "offline"}`}>
//               In Progress
//             </p>
//           </div>
//         </div>

//         <div
//           className={`stat-card ${isOnline ? "online" : "offline"} ${
//             selectedStat === "completed" ? "active" : ""
//           }`}
//           onClick={() => handleStatClick("completed")}
//         >
//           <div className={`stat-icon ${isOnline ? "online" : "offline"}`}>
//             <SvgIcons.CheckCircle />
//           </div>
//           <div className="stat-content">
//             <h3 className={`stat-number ${isOnline ? "online" : "offline"}`}>
//               {completedOrders.length}
//             </h3>
//             <p className={`stat-label ${isOnline ? "online" : "offline"}`}>
//               Delivered
//             </p>
//           </div>
//         </div>

//         <div
//           className={`stat-card ${isOnline ? "online" : "offline"} ${
//             selectedStat === "cancelled" ? "active" : ""
//           } ${cancelledOrders.length > 0 ? "cancelled-updated" : ""}`}
//           onClick={() => handleStatClick("cancelled")}
//         >
//           <div className={`stat-icon ${isOnline ? "online" : "offline"}`}>
//             <SvgIcons.Cancel />
//           </div>
//           <div className="stat-content">
//             <h3
//               className={`stat-number ${isOnline ? "online" : "offline"}`}
//               style={{ color: "#EF4444" }}
//             >
//               {cancelledOrders.length}
//             </h3>
//             <p className={`stat-label ${isOnline ? "online" : "offline"}`}>
//               Cancelled Orders
//             </p>
//             <div
//               className="cancel-recent"
//               style={{ fontSize: "10px", color: "#EF4444", marginTop: "4px" }}
//             >
//               {cancelledOrders.length > 0
//                 ? "Recently updated"
//                 : "No cancellations"}
//             </div>
//           </div>
//         </div>

//         <div
//           className={`stat-card ${isOnline ? "online" : "offline"} ${
//             selectedStat === "todayEarnings" ? "active" : ""
//           }`}
//           onClick={() => handleStatClick("todayEarnings")}
//         >
//           <div className={`stat-icon ${isOnline ? "online" : "offline"}`}>
//             <SvgIcons.Rupee />
//           </div>
//           <div className="stat-content">
//             <h3 className={`stat-number ${isOnline ? "online" : "offline"}`}>
//               {formatIndianCurrency(incentives.today)}
//             </h3>
//             <p className={`stat-label ${isOnline ? "online" : "offline"}`}>
//               Today's Earnings
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="content-grid">
//         <div className={`section ${isOnline ? "online" : "offline"}`}>
//           <div className="section-header">
//             <h2 className={`section-title ${isOnline ? "online" : "offline"}`}>
//               {acceptedOrders.length > 0
//                 ? "Current Delivery"
//                 : availableOrders.length > 0
//                 ? "Available Deliveries"
//                 : isOnline
//                 ? "Waiting for Orders..."
//                 : "Offline Mode"}
//             </h2>
//             {(completedOrders.length > 0 || cancelledOrders.length > 0) && (
//               <span className="view-all-link" onClick={handleViewAllTasks}>
//                 View History
//               </span>
//             )}
//           </div>

//           {/* Delivery Progress Tracker - Show when there's an accepted order */}
//           {acceptedOrders.length > 0 && (
//             <div
//               className={`delivery-progress ${isOnline ? "online" : "offline"}`}
//             >
//               {getProgressSteps()}
//             </div>
//           )}

//           {/* Show status message when offline and no orders */}
//           {!isOnline &&
//             acceptedOrders.length === 0 &&
//             availableOrders.length === 0 && (
//               <div className="offline-status-message">
//                 <p>
//                   You are currently offline. Go online to receive delivery
//                   requests.
//                 </p>
//               </div>
//             )}

//           <div className="tasks-list">
//             {acceptedOrders.length > 0
//               ? acceptedOrders.map((task) => (
//                   <div
//                     key={task.id}
//                     className={`task-card ${isOnline ? "online" : "offline"}`}
//                   >
//                     <div className="task-header">
//                       <div className="task-info">
//                         <h4
//                           className={`order-id ${
//                             isOnline ? "online" : "offline"
//                           }`}
//                         >
//                           <SvgIcons.Info /> {task.orderId}
//                         </h4>
//                         <p
//                           className={`customer-name ${
//                             isOnline ? "online" : "offline"
//                           }`}
//                         >
//                           <SvgIcons.User /> {task.customerName}
//                         </p>
//                       </div>
//                       <div className="task-status">
//                         <span
//                           className="status-badge"
//                           style={{
//                             backgroundColor: getStatusColor(task.status),
//                           }}
//                         >
//                           <SvgIcons.Check />{" "}
//                           {task.status.replace("_", " ").toUpperCase()}
//                         </span>
//                         <span
//                           className="priority-badge"
//                           style={{ color: getPriorityColor(task.priority) }}
//                         >
//                           {task.priority}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="task-details">
//                       {/* Pharmacy Location */}
//                       <div className="location-row">
//                         <span
//                           className={`location-label ${
//                             isOnline ? "online" : "offline"
//                           }`}
//                         >
//                           <SvgIcons.Hospital /> Pharmacy:
//                         </span>
//                         <span
//                           className={`location-text ${
//                             isOnline ? "online" : "offline"
//                           }`}
//                         >
//                           {task.pharmacyLocation}
//                           <div className="contact-info">
//                             <button
//                               className={`contact-button ${
//                                 isOnline ? "online" : "offline"
//                               }`}
//                               onClick={() =>
//                                 handleCallPharmacy(task.pharmacyPhone)
//                               }
//                             >
//                               <SvgIcons.Phone /> Call Pharmacy
//                             </button>
//                             <button
//                               className="direction-button"
//                               onClick={() =>
//                                 handleGetDirections(task.pharmacyLocation)
//                               }
//                             >
//                               <SvgIcons.MapPin /> Get Directions
//                             </button>
//                           </div>
//                         </span>
//                       </div>

//                       {/* Delivery Location */}
//                       <div className="location-row">
//                         <span
//                           className={`location-label ${
//                             isOnline ? "online" : "offline"
//                           }`}
//                         >
//                           <SvgIcons.Home /> Delivery:
//                         </span>
//                         <span
//                           className={`location-text ${
//                             isOnline ? "online" : "offline"
//                           }`}
//                         >
//                           {task.deliveryLocation}
//                           <div className="contact-info">
//                             <button
//                               className={`contact-button ${
//                                 isOnline ? "online" : "offline"
//                               }`}
//                               onClick={() =>
//                                 handleCallCustomer(task.customerPhone)
//                               }
//                             >
//                               <SvgIcons.Phone /> Call Customer
//                             </button>
//                             <button
//                               className="customer-direction-button"
//                               onClick={() =>
//                                 handleGetDirections(task.deliveryLocation, true)
//                               }
//                             >
//                               <SvgIcons.MapPin /> Customer Directions
//                             </button>
//                           </div>
//                         </span>
//                       </div>
//                     </div>

//                     <div className="task-meta">
//                       <span
//                         className={`meta-item ${
//                           isOnline ? "online" : "offline"
//                         }`}
//                       >
//                         <SvgIcons.Time /> {task.estimatedTime}
//                       </span>
//                       <span
//                         className={`meta-item ${
//                           isOnline ? "online" : "offline"
//                         }`}
//                       >
//                         <SvgIcons.Distance /> {task.distance}
//                       </span>
//                       <span
//                         className={`meta-item ${
//                           isOnline ? "online" : "offline"
//                         }`}
//                       >
//                         <SvgIcons.Money /> {formatIndianCurrency(task.amount)}
//                       </span>
//                       {task.tip > 0 && (
//                         <span
//                           className={`meta-item ${
//                             isOnline ? "online" : "offline"
//                           }`}
//                           style={{ color: "#10B981", fontWeight: "600" }}
//                         >
//                           💝 Tip: {formatIndianCurrency(task.tip)}
//                         </span>
//                       )}
//                     </div>

//                     <div className="task-actions">
//                       {task.status === "assigned" && (
//                         <>
//                           <button
//                             className="primary-button"
//                             onClick={() => handleReachedPharmacy(task)}
//                           >
//                             <SvgIcons.Hospital /> I've Reached Pharmacy
//                           </button>
//                           <button
//                             className="direction-button"
//                             onClick={() =>
//                               handleGetDirections(task.pharmacyLocation)
//                             }
//                           >
//                             <SvgIcons.MapPin /> Directions to Pharmacy
//                           </button>
//                         </>
//                       )}

//                       {task.status === "pickup_reached" && (
//                         <button
//                           className="success-button"
//                           onClick={() => handlePickupCompleted(task)}
//                         >
//                           <SvgIcons.Check /> Pickup Completed
//                         </button>
//                       )}

//                       {task.status === "pickup_completed" && (
//                         <>
//                           <button
//                             className="primary-button"
//                             onClick={() => handleReachedCustomer(task)}
//                           >
//                             <SvgIcons.Home /> I've Reached Customer
//                           </button>
//                           <button
//                             className="customer-direction-button"
//                             onClick={() =>
//                               handleGetDirections(task.deliveryLocation, true)
//                             }
//                             style={{ padding: "8px 12px", fontSize: "12px" }}
//                           >
//                             <SvgIcons.MapPin /> Customer Directions
//                           </button>
//                         </>
//                       )}

//                       {task.status === "delivery_reached" && (
//                         <button
//                           className="success-button"
//                           onClick={() => handleOpenProofModal(task)}
//                         >
//                           <SvgIcons.Check /> Complete Delivery
//                         </button>
//                       )}

//                       <button
//                         className="cancel-order-button"
//                         onClick={() => handleCancelOrder(task)}
//                       >
//                         <SvgIcons.Cancel /> Cancel Order
//                       </button>

//                       <button
//                         className="secondary-button"
//                         onClick={() => handleViewDetails(task)}
//                       >
//                         <SvgIcons.Info /> View Details
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               : availableOrders.map((task) => (
//                   <div
//                     key={task.id}
//                     className={`task-card ${isOnline ? "online" : "offline"}`}
//                   >
//                     <div className="task-header">
//                       <div className="task-info">
//                         <h4
//                           className={`order-id ${
//                             isOnline ? "online" : "offline"
//                           }`}
//                         >
//                           <SvgIcons.Info /> {task.orderId}
//                         </h4>
//                         <p
//                           className={`customer-name ${
//                             isOnline ? "online" : "offline"
//                           }`}
//                         >
//                           <SvgIcons.User /> {task.customerName}
//                         </p>
//                       </div>
//                       <div className="task-status">
//                         <span
//                           className="status-badge"
//                           style={{
//                             backgroundColor: getStatusColor(task.status),
//                           }}
//                         >
//                           {task.status}
//                         </span>
//                         <span
//                           className="priority-badge"
//                           style={{ color: getPriorityColor(task.priority) }}
//                         >
//                           {task.priority}
//                         </span>
//                       </div>
//                     </div>

//                     <div className="task-details">
//                       <div className="location-row">
//                         <span
//                           className={`location-label ${
//                             isOnline ? "online" : "offline"
//                           }`}
//                         >
//                           <SvgIcons.Hospital /> Pharmacy:
//                         </span>
//                         <span
//                           className={`location-text ${
//                             isOnline ? "online" : "offline"
//                           }`}
//                         >
//                           {task.pharmacyLocation}
//                         </span>
//                       </div>
//                       <div className="location-row">
//                         <span
//                           className={`location-label ${
//                             isOnline ? "online" : "offline"
//                           }`}
//                         >
//                           <SvgIcons.Home /> Delivery:
//                         </span>
//                         <span
//                           className={`location-text ${
//                             isOnline ? "online" : "offline"
//                           }`}
//                         >
//                           {task.deliveryLocation}
//                           <button
//                             className="customer-direction-button"
//                             onClick={() =>
//                               handleGetDirections(task.deliveryLocation, true)
//                             }
//                           >
//                             <SvgIcons.MapPin /> Customer Directions
//                           </button>
//                         </span>
//                       </div>
//                     </div>

//                     <div className="task-meta">
//                       <span
//                         className={`meta-item ${
//                           isOnline ? "online" : "offline"
//                         }`}
//                       >
//                         <SvgIcons.Time /> {task.estimatedTime}
//                       </span>
//                       <span
//                         className={`meta-item ${
//                           isOnline ? "online" : "offline"
//                         }`}
//                       >
//                         <SvgIcons.Distance /> {task.distance}
//                       </span>
//                       <span
//                         className={`meta-item ${
//                           isOnline ? "online" : "offline"
//                         }`}
//                       >
//                         <SvgIcons.Money /> {formatIndianCurrency(task.amount)}
//                       </span>
//                       {task.tip > 0 && (
//                         <span
//                           className={`meta-item ${
//                             isOnline ? "online" : "offline"
//                           }`}
//                           style={{ color: "#10B981", fontWeight: "600" }}
//                         >
//                           💝 Tip: {formatIndianCurrency(task.tip)}
//                         </span>
//                       )}
//                     </div>

//                     <div className="task-actions">
//                       <button
//                         className="accept-button"
//                         onClick={() => handleAcceptOrder(task)}
//                       >
//                         <SvgIcons.Check /> Accept Delivery
//                       </button>
//                       <button
//                         className="cancel-order-button"
//                         onClick={() => handleCancelAvailableOrder(task)}
//                       >
//                         <SvgIcons.Cancel /> Cancel Order
//                       </button>
//                       <button
//                         className="secondary-button"
//                         onClick={() => handleViewDetails(task)}
//                       >
//                         <SvgIcons.Info /> View Details
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//           </div>
//         </div>

//         <div className="sidebar-section">
//           {/* Live Route Tracker - Always visible but shows different content based on status */}
//           <LiveRouteTracker
//             deliveryData={deliveryData}
//             isOnline={isOnline}
//             currentOrder={acceptedOrders.length > 0 ? acceptedOrders[0] : null}
//             currentStep={currentStep}
//           />

//           {/* Recent Cancelled Orders Section */}
//           {cancelledOrders.length > 0 && (
//             <div
//               className={`delivery-history-section ${
//                 isOnline ? "online" : "offline"
//               }`}
//             >
//               <div className="section-header">
//                 <h2
//                   className={`section-title ${isOnline ? "online" : "offline"}`}
//                   style={{ color: "#EF4444" }}
//                 >
//                   <SvgIcons.Cancel /> Recent Cancellations
//                 </h2>
//                 <span className="view-all-link" onClick={handleViewAllTasks}>
//                   View All
//                 </span>
//               </div>
//               <div className="tasks-list">
//                 {cancelledOrders
//                   .slice(-3)
//                   .reverse()
//                   .map((order, index) => (
//                     <div
//                       key={order.id}
//                       className={`history-item ${
//                         isOnline ? "online" : "offline"
//                       } cancelled`}
//                     >
//                       <h4
//                         className={`history-order-id ${
//                           isOnline ? "online" : "offline"
//                         }`}
//                         style={{ color: "#EF4444" }}
//                       >
//                         <SvgIcons.Cancel /> {order.orderId}
//                       </h4>
//                       <p
//                         className={`history-details ${
//                           isOnline ? "online" : "offline"
//                         }`}
//                       >
//                         {order.customerName} •{" "}
//                         {formatIndianCurrency(order.amount)}
//                       </p>
//                       <p
//                         className={`history-time ${
//                           isOnline ? "online" : "offline"
//                         }`}
//                       >
//                         <SvgIcons.Time /> Cancelled:{" "}
//                         {order.cancelledAt?.toLocaleTimeString() || "Just now"}
//                       </p>
//                       {order.cancelReason && (
//                         <p className="cancel-reason">
//                           Reason: {order.cancelReason}
//                         </p>
//                       )}
//                     </div>
//                   ))}
//               </div>
//             </div>
//           )}

//           {/* Delivery History Section */}
//           {completedOrders.length > 0 && (
//             <div
//               className={`delivery-history-section ${
//                 isOnline ? "online" : "offline"
//               }`}
//             >
//               <div className="section-header">
//                 <h2
//                   className={`section-title ${isOnline ? "online" : "offline"}`}
//                 >
//                   Recent Deliveries
//                 </h2>
//                 <span className="view-all-link" onClick={handleViewAllTasks}>
//                   View All
//                 </span>
//               </div>
//               <div className="tasks-list">
//                 {completedOrders
//                   .slice(-3)
//                   .reverse()
//                   .map((order, index) => (
//                     <div
//                       key={order.id}
//                       className={`history-item ${
//                         isOnline ? "online" : "offline"
//                       }`}
//                     >
//                       <h4
//                         className={`history-order-id ${
//                           isOnline ? "online" : "offline"
//                         }`}
//                       >
//                         <SvgIcons.Info /> {order.orderId}
//                       </h4>
//                       <p
//                         className={`history-details ${
//                           isOnline ? "online" : "offline"
//                         }`}
//                       >
//                         {order.customerName} •{" "}
//                         {formatIndianCurrency(order.amount)}
//                         {order.tip > 0 &&
//                           ` + ${formatIndianCurrency(order.tip)} tip`}
//                       </p>
//                       <p
//                         className={`history-time ${
//                           isOnline ? "online" : "offline"
//                         }`}
//                       >
//                         <SvgIcons.Time /> Delivered:{" "}
//                         {order.deliveredAt?.toLocaleTimeString() || "Just now"}
//                       </p>
//                     </div>
//                   ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* AI Chat Button */}
//       <button
//         className="ai-chat-button"
//         onClick={safeToggleAIChat}
//         title="AI Assistant"
//       >
//         <SvgIcons.Chat />
//       </button>
//     </div>
//   );
// };

// // Add default props to prevent errors
// Dashboard.defaultProps = {
//   profileData: {},
//   deliveryData: {},
//   isOnline: false,
//   toggleOnlineStatus: () => {},
//   setSelectedTask: () => {},
//   toggleNotifications: () => {},
//   getUnreadCount: () => 0,
//   toggleAIChat: () => {},
//   setActivePage: () => {},
// };

// export default Dashboard;
import React, { useState, useEffect, useRef } from "react";
import LiveRouteTracker from "./LiveRouteTracker";
import "./Dashboard.css";

// Get token from localStorage
const getToken = () => {
  return localStorage.getItem("access_token");
};

// SVG Icons Component (keep the same)
const SvgIcons = {
  // Status Icons
  Online: () => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <circle cx="12" cy="12" r="10" />
    </svg>
  ),
  Offline: () => (
    <svg
      width="12"
      height="12"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </svg>
  ),

  // Action Icons
  Bell: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
      <path d="M13.73 21a2 2 0 0 1-3.46 0" />
    </svg>
  ),
  Chat: () => (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1-2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  ),

  // Stats Icons
  Package: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M16.5 9.4l-9-5.19M21 16v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2M3 7h18v5H3z" />
      <path d="m9.5 22 1.5-7 3 6.5M13.5 22 12 15l-3 6.5" />
    </svg>
  ),
  Clock: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Truck: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="1" y="3" width="15" height="13" />
      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  ),
  CheckCircle: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
      <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
  ),
  Rupee: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 10h16" />
      <path d="M4 14h16" />
      <path d="M10 3v18" />
      <path d="M14 3v18" />
      <path d="M8 7h8" />
      <path d="M8 17h8" />
    </svg>
  ),
  Cancel: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="15" y1="9" x2="9" y2="15" />
      <line x1="9" y1="9" x2="15" y2="15" />
    </svg>
  ),

  // Task Action Icons
  Phone: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  ),
  MapPin: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  ),
  Home: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  ),
  Hospital: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
      <path d="M2 8h16v9a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8z" />
      <line x1="6" y1="1" x2="6" y2="4" />
      <line x1="10" y1="1" x2="10" y2="4" />
      <line x1="14" y1="1" x2="14" y2="4" />
    </svg>
  ),
  Check: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  Info: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="16" x2="12" y2="12" />
      <line x1="12" y1="8" x2="12.01" y2="8" />
    </svg>
  ),
  User: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  Calendar: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  Star: ({ filled = true }) => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill={filled ? "#FFD700" : "none"}
      stroke="#FFD700"
      strokeWidth="2"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  ),
  Distance: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Money: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  ),
  Time: () => (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  ),
  Warning: () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  ),
};

const Dashboard = ({
  profileData,
  deliveryData,
  isOnline: propIsOnline,
  toggleOnlineStatus,
  setSelectedTask,
  toggleNotifications,
  getUnreadCount,
  toggleAIChat,
  setActivePage,
}) => {
  const [selectedStat, setSelectedStat] = useState(null);
  const [isOnline, setIsOnline] = useState(false);
  const [acceptedOrders, setAcceptedOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [cancelledOrders, setCancelledOrders] = useState([]);
  const [availableOrders, setAvailableOrders] = useState([]);
  const [currentStep, setCurrentStep] = useState("available");
  const [incentives, setIncentives] = useState({
    today: 0,
    weekly: 0,
    monthly: 0,
    completedDeliveries: 0,
    cancelledDeliveries: 0,
    bonusEligible: false,
    customerTips: 0,
    dailyTarget: 300,
    dailyOrdersCompleted: 0,
    dailyTargetAchieved: false,
  });
  const [showProofModal, setShowProofModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [showCancelledSuccessModal, setShowCancelledSuccessModal] =
    useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [currentDeliveryForProof, setCurrentDeliveryForProof] = useState(null);
  const [orderToCancel, setOrderToCancel] = useState(null);
  const [selectedTaskDetails, setSelectedTaskDetails] = useState(null);
  const [customerOTP, setCustomerOTP] = useState("");
  const [cancelReason, setCancelReason] = useState("");
  const [lastCancelledOrder, setLastCancelledOrder] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const audioRef = useRef(null);
  const notificationIntervalRef = useRef(null);
  const otpInputRef = useRef(null);
  const cancelReasonRef = useRef(null);
  const [lastDeliveryDetails, setLastDeliveryDetails] = useState(null);

  // Safe function calls
  const safeSetActivePage = (page) => {
    if (typeof setActivePage === "function") {
      setActivePage(page);
    }
  };

  const safeToggleOnlineStatus = (status) => {
    if (typeof toggleOnlineStatus === "function") {
      toggleOnlineStatus(status);
    }
  };

  const safeSetSelectedTask = (task) => {
    if (typeof setSelectedTask === "function") {
      setSelectedTask(task);
    }
  };

  const safeToggleNotifications = () => {
    if (typeof toggleNotifications === "function") {
      toggleNotifications();
    }
  };

  const safeGetUnreadCount = () => {
    if (typeof getUnreadCount === "function") {
      return getUnreadCount();
    }
    return 0;
  };

  const safeToggleAIChat = () => {
    if (typeof toggleAIChat === "function") {
      toggleAIChat();
    }
  };

  // Sync with prop isOnline
  useEffect(() => {
    if (propIsOnline !== undefined) {
      setIsOnline(propIsOnline);
    }
  }, [propIsOnline]);

  // Focus on cancel reason input when modal opens
  useEffect(() => {
    if (showCancelModal && cancelReasonRef.current) {
      setTimeout(() => {
        cancelReasonRef.current.focus();
      }, 100);
    }
  }, [showCancelModal]);

  // 📥 Fetch Available Orders from API
  const fetchAvailableOrders = async () => {
    const token = getToken();
    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      const res = await fetch(
        "http://127.0.0.1:8000/api/delivery/orders/available/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      // Transform API data to match frontend structure if needed
      const transformedOrders = Array.isArray(data)
        ? data.map((order) => ({
            ...order,
            id: order.id || order.orderId,
            orderId: order.orderId || order.id,
            customerName: order.customer_name || order.customerName,
            customerPhone: order.customer_phone || order.customerPhone,
            pharmacyName: order.pharmacy_name || order.pharmacyName,
            pharmacyPhone: order.pharmacy_phone || order.pharmacyPhone,
            pharmacyLocation: order.pharmacy_location || order.pharmacyLocation,
            deliveryLocation: order.delivery_location || order.deliveryLocation,
            estimatedTime:
              order.estimated_time || order.estimatedTime || "25 mins",
            distance: order.distance || "3.2 km",
            amount: parseFloat(order.amount) || 0,
            tip: parseFloat(order.tip) || 0,
            status: order.status || "pending",
            priority: order.priority || "Medium",
            instructions:
              order.instructions ||
              "Handle with care. Keep medicines in original packaging.",
            customerOTP: order.customer_otp || order.customerOTP || "1234",
            medicines: order.medicines || [],
            specialInstructions:
              order.special_instructions || order.specialInstructions || "",
            paymentMethod:
              order.payment_method || order.paymentMethod || "Cash on Delivery",
            orderTime:
              order.order_time ||
              order.orderTime ||
              new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              }),
          }))
        : [];

      setAvailableOrders(transformedOrders);
    } catch (error) {
      console.error("Error fetching available orders:", error);
      // Fallback to mock data in case of error (remove in production)
      const fallbackOrders = [
        {
          id: "ORD001",
          orderId: "MED001",
          customerName: "Rajesh Kumar",
          customerPhone: "+91 98765 43210",
          pharmacyName: "Apollo Pharmacy",
          pharmacyPhone: "+91 98765 43211",
          pharmacyLocation: "Apollo Pharmacy, MVP Colony, Visakhapatnam",
          deliveryLocation: "H-Block, Seethammadhara, Visakhapatnam",
          estimatedTime: "25 mins",
          distance: "3.2 km",
          amount: 45,
          tip: 10,
          status: "pending",
          priority: "High",
          instructions:
            "Handle with care. Keep medicines in original packaging.",
          customerOTP: Math.floor(1000 + Math.random() * 9000).toString(),
          medicines: [
            { name: "Paracetamol 500mg", quantity: "1 strip of 10 tablets" },
            { name: "Cetirizine 10mg", quantity: "1 strip of 10 tablets" },
            {
              name: "Vitamin C Supplements",
              quantity: "1 bottle of 30 tablets",
            },
          ],
          specialInstructions: "Please deliver before 6 PM",
          paymentMethod: "Cash on Delivery",
          orderTime: "2:30 PM",
        },
      ];
      setAvailableOrders(fallbackOrders);
    }
  };

  // ✅ Accept Order API Call
  const handleAcceptOrder = async (order) => {
    const token = getToken();
    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      setIsLoading(true);
      await fetch(
        `http://127.0.0.1:8000/api/delivery/orders/accept/${
          order.orderId || order.id
        }/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update local state
      const acceptedOrder = {
        ...order,
        status: "assigned",
        acceptedAt: new Date(),
      };

      setAcceptedOrders([acceptedOrder]);
      setAvailableOrders([]);
      setCurrentStep("accepted");

      // Stop notifications
      if (notificationIntervalRef.current) {
        clearInterval(notificationIntervalRef.current);
      }
    } catch (error) {
      console.error("Error accepting order:", error);
      alert("Failed to accept order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // ❌ Cancel Order API Call
  const handleConfirmCancel = async () => {
    if (!orderToCancel) return;

    const token = getToken();
    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      setIsLoading(true);
      await fetch(
        `http://127.0.0.1:8000/api/delivery/orders/cancel/${
          orderToCancel.orderId || orderToCancel.id
        }/`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            reason: cancelReason || "No reason provided",
          }),
        }
      );

      // Update local state
      const cancelledOrder = {
        ...orderToCancel,
        status: "cancelled",
        cancelledAt: new Date(),
        cancelReason: cancelReason || "No reason provided",
        cancelledBy: "delivery_partner",
      };

      setCancelledOrders((prev) => [...prev, cancelledOrder]);

      setIncentives((prev) => ({
        ...prev,
        cancelledDeliveries: prev.cancelledDeliveries + 1,
      }));

      if (acceptedOrders.some((order) => order.id === orderToCancel.id)) {
        setAcceptedOrders((prev) =>
          prev.filter((o) => o.id !== orderToCancel.id)
        );
        setCurrentStep("available");
      } else {
        setAvailableOrders((prev) =>
          prev.filter((o) => o.id !== orderToCancel.id)
        );
      }

      setLastCancelledOrder({
        orderId: orderToCancel.orderId || orderToCancel.id,
        customerName: orderToCancel.customerName,
        amount: orderToCancel.amount,
        tip: orderToCancel.tip || 0,
        cancelReason: cancelReason || "No reason provided",
        cancelledTime: new Date().toLocaleTimeString(),
      });

      setShowCancelModal(false);
      setShowCancelledSuccessModal(true);
      setOrderToCancel(null);
      setCancelReason("");

      // Refresh available orders
      await fetchAvailableOrders();
    } catch (error) {
      console.error("Error cancelling order:", error);
      alert("Failed to cancel order. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // 💰 Fetch My Orders for Earnings Calculation
  const fetchMyOrders = async () => {
    const token = getToken();
    if (!token) {
      console.error("No token found");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/api/delivery/orders/my/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const orders = await res.json();

      // Transform API data if needed
      const transformedOrders = Array.isArray(orders)
        ? orders.map((order) => ({
            ...order,
            id: order.id || order.orderId,
            orderId: order.orderId || order.id,
            amount: parseFloat(order.amount) || 0,
            tip: parseFloat(order.tip) || 0,
            status: order.status || "pending",
          }))
        : [];

      const completed = transformedOrders.filter(
        (o) => o.status === "delivery_completed"
      );
      const cancelled = transformedOrders.filter(
        (o) => o.status === "cancelled"
      );

      const earnings = completed.reduce(
        (sum, o) => sum + Number(o.amount) + Number(o.tip),
        0
      );

      const customerTips = completed.reduce((sum, o) => sum + Number(o.tip), 0);

      setCompletedOrders(completed);
      setCancelledOrders(cancelled);

      setIncentives((prev) => ({
        ...prev,
        today: earnings,
        completedDeliveries: completed.length,
        cancelledDeliveries: cancelled.length,
        customerTips: customerTips,
        dailyOrdersCompleted: completed.length,
        bonusEligible: completed.length >= 5,
      }));
    } catch (error) {
      console.error("Error fetching my orders:", error);
    }
  };

  // Initialize available orders when going online
  useEffect(() => {
    if (isOnline) {
      fetchAvailableOrders();
      fetchMyOrders(); // Also fetch earnings when online
    } else {
      // Clear available orders when going offline
      setAvailableOrders([]);
    }
  }, [isOnline]);

  // Check for daily target achievement
  useEffect(() => {
    if (completedOrders.length >= 12 && !incentives.dailyTargetAchieved) {
      setIncentives((prev) => ({
        ...prev,
        dailyTargetAchieved: true,
        today: prev.today + prev.dailyTarget,
      }));
    }
  }, [completedOrders.length, incentives.dailyTargetAchieved]);

  // Simulate new pharmacy orders when online (optional - can be removed if using WebSockets)
  useEffect(() => {
    if (
      !isOnline ||
      acceptedOrders.length > 0 ||
      incentives.dailyTargetAchieved
    )
      return;

    // Poll for new orders every 30 seconds
    const orderPollingInterval = setInterval(() => {
      if (availableOrders.length === 0) {
        fetchAvailableOrders();
      }
    }, 30000);

    return () => clearInterval(orderPollingInterval);
  }, [
    isOnline,
    acceptedOrders.length,
    availableOrders.length,
    incentives.dailyTargetAchieved,
  ]);

  // Notification sound system when online
  useEffect(() => {
    if (
      isOnline &&
      availableOrders.length > 0 &&
      acceptedOrders.length === 0 &&
      !incentives.dailyTargetAchieved
    ) {
      notificationIntervalRef.current = setInterval(() => {
        if (audioRef.current) {
          audioRef.current
            .play()
            .catch((e) => console.log("Audio play failed:", e));
        }
      }, 5000);

      return () => {
        if (notificationIntervalRef.current) {
          clearInterval(notificationIntervalRef.current);
        }
      };
    } else {
      if (notificationIntervalRef.current) {
        clearInterval(notificationIntervalRef.current);
      }
    }
  }, [
    isOnline,
    availableOrders.length,
    acceptedOrders.length,
    incentives.dailyTargetAchieved,
  ]);

  // Focus OTP input when proof modal opens
  useEffect(() => {
    if (showProofModal && otpInputRef.current) {
      setTimeout(() => {
        otpInputRef.current.focus();
      }, 100);
    }
  }, [showProofModal]);

  const getCurrentGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

  const formatIndianCurrency = (amount) => {
    return `₹${amount.toLocaleString("en-IN")}`;
  };

  const getDisplayName = () => {
    return profileData?.fullName?.split(" ")[0] || "User";
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case "High":
        return "#EF4444";
      case "Medium":
        return "#F59E0B";
      case "Low":
        return "#10B981";
      default:
        return "#4F6F6B";
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "#F59E0B";
      case "assigned":
        return "#F59E0B";
      case "pickup_reached":
        return "#3B82F6";
      case "pickup_completed":
        return "#8B5CF6";
      case "delivery_reached":
        return "#F59E0B";
      case "delivery_completed":
        return "#10B981";
      case "cancelled":
        return "#EF4444";
      default:
        return "#4F6F6B";
    }
  };

  const handleViewAllTasks = () => {
    safeSetActivePage("delivery-history");
  };

  const handleStatClick = (statKey) => {
    if (selectedStat === statKey) {
      setSelectedStat(null);
    } else {
      setSelectedStat(statKey);
    }
  };

  const handleToggleOnline = () => {
    const newOnlineStatus = !isOnline;
    setIsOnline(newOnlineStatus);

    if (newOnlineStatus) {
      setSelectedStat(null);
      setCurrentStep("available");
      fetchAvailableOrders();
      fetchMyOrders();
    } else {
      // Don't clear accepted orders when going offline
      // Keep the current state but stop notifications
      if (notificationIntervalRef.current) {
        clearInterval(notificationIntervalRef.current);
      }
    }

    safeToggleOnlineStatus(newOnlineStatus);
  };

  const handleCancelAvailableOrder = (order) => {
    setOrderToCancel(order);
    setCancelReason("");
    setShowCancelModal(true);
  };

  // These functions would need corresponding API endpoints
  const handleReachedPharmacy = (order) => {
    // TODO: Add API call for updating order status
    setAcceptedOrders((prev) =>
      prev.map((o) =>
        o.id === order.id
          ? { ...o, status: "pickup_reached", pharmacyReachedAt: new Date() }
          : o
      )
    );
    setCurrentStep("pickup_reached");
  };

  const handlePickupCompleted = (order) => {
    // TODO: Add API call for updating order status
    setAcceptedOrders((prev) =>
      prev.map((o) =>
        o.id === order.id
          ? { ...o, status: "pickup_completed", pickupCompletedAt: new Date() }
          : o
      )
    );
    setCurrentStep("pickup_completed");
  };

  const handleReachedCustomer = (order) => {
    // TODO: Add API call for updating order status
    setAcceptedOrders((prev) =>
      prev.map((o) =>
        o.id === order.id
          ? { ...o, status: "delivery_reached", customerReachedAt: new Date() }
          : o
      )
    );
    setCurrentStep("delivery_reached");
  };

  const handleOpenProofModal = (order) => {
    setCurrentDeliveryForProof(order);
    setShowProofModal(true);
  };

  const handleOTPChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) {
      setCustomerOTP(value);
    }
  };

  const handleSubmitProof = () => {
    if (!customerOTP || customerOTP.length !== 4) {
      return;
    }

    // TODO: Add API call for completing delivery with OTP
    const deliveredOrder = {
      ...currentDeliveryForProof,
      status: "delivery_completed",
      deliveredAt: new Date(),
      proofOTP: customerOTP,
      deliveryDate: new Date().toISOString().split("T")[0],
      completedTime: new Date().toLocaleTimeString(),
      rating: Math.floor(Math.random() * 2) + 4,
      feedback:
        Math.random() > 0.5
          ? "Great service! Very professional and on time."
          : "Excellent delivery service!",
    };

    setCompletedOrders((prev) => [...prev, deliveredOrder]);
    setAcceptedOrders([]);
    setCurrentStep("available");

    setIncentives((prev) => ({
      ...prev,
      completedDeliveries: prev.completedDeliveries + 1,
      dailyOrdersCompleted: prev.dailyOrdersCompleted + 1,
      today:
        prev.today +
        currentDeliveryForProof.amount +
        (currentDeliveryForProof.tip || 0),
      weekly:
        prev.weekly +
        currentDeliveryForProof.amount +
        (currentDeliveryForProof.tip || 0),
      monthly:
        prev.monthly +
        currentDeliveryForProof.amount +
        (currentDeliveryForProof.tip || 0),
      customerTips: prev.customerTips + (currentDeliveryForProof.tip || 0),
      bonusEligible: prev.dailyOrdersCompleted + 1 >= 5,
    }));

    setLastDeliveryDetails({
      orderId: currentDeliveryForProof.orderId,
      amount: currentDeliveryForProof.amount,
      tip: currentDeliveryForProof.tip || 0,
      customerName: currentDeliveryForProof.customerName,
      deliveryLocation: currentDeliveryForProof.deliveryLocation,
    });

    setShowProofModal(false);
    setShowSuccessModal(true);
    setCurrentDeliveryForProof(null);
    setCustomerOTP("");

    // Refresh orders after completion
    fetchAvailableOrders();
    fetchMyOrders();
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setLastDeliveryDetails(null);
  };

  const handleCancelOrder = (order) => {
    setOrderToCancel(order);
    setCancelReason("");
    setShowCancelModal(true);
  };

  const handleCloseCancelledSuccessModal = () => {
    setShowCancelledSuccessModal(false);
    setLastCancelledOrder(null);
  };

  const handleCallPharmacy = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  const handleCallCustomer = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  const handleGetDirections = (location, isCustomer = false) => {
    const locationWithCity = `${location}, Visakhapatnam, Andhra Pradesh`;
    const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
      locationWithCity
    )}`;
    window.open(mapsUrl, "_blank");
  };

  const handleViewDetails = (task) => {
    setSelectedTaskDetails(task);
    setShowDetailsModal(true);
  };

  const handleCloseDetailsModal = () => {
    setShowDetailsModal(false);
    setSelectedTaskDetails(null);
  };

  const getMedicines = (task) => {
    return task?.medicines || [];
  };

  const getProgressSteps = () => {
    const steps = [
      { label: "Order Accepted", key: "accepted" },
      { label: "Reached Pharmacy", key: "pickup_reached" },
      { label: "Pickup Completed", key: "pickup_completed" },
      { label: "Reached Customer", key: "delivery_reached" },
      { label: "Delivery Completed", key: "proof_submitted" },
    ];

    const currentIndex = steps.findIndex((step) => step.key === currentStep);

    return steps.map((step, index) => {
      const isCompleted = index < currentIndex;
      const isActive = step.key === currentStep;

      return (
        <React.Fragment key={step.key}>
          {index > 0 && (
            <div
              className={`progress-line ${isOnline ? "online" : "offline"} ${
                isCompleted ? "completed" : ""
              } ${index <= currentIndex ? "active" : ""}`}
            />
          )}
          <div className="progress-step">
            <div
              className={`progress-dot ${isOnline ? "online" : "offline"} ${
                isActive ? "active" : ""
              } ${isCompleted ? "completed" : ""}`}
            />
            <div
              className={`progress-label ${isOnline ? "online" : "offline"} ${
                isActive ? "active" : ""
              }`}
            >
              {step.label}
            </div>
          </div>
        </React.Fragment>
      );
    });
  };

  // Proof of Delivery Modal (keep the same UI)
  const ProofModal = () => {
    if (!showProofModal) return null;

    return (
      <div className="proof-modal">
        <div
          className={`proof-modal-content ${isOnline ? "online" : "offline"}`}
        >
          <h2
            className={`proof-modal-title ${isOnline ? "online" : "offline"}`}
          >
            <SvgIcons.Check /> Complete Delivery
          </h2>

          <div className="scrollable-content">
            <div className="proof-section">
              <label
                className={`proof-label ${isOnline ? "online" : "offline"}`}
              >
                <SvgIcons.Info /> Enter Customer OTP to Confirm Delivery
              </label>
              <div className="otp-input-container">
                <input
                  ref={otpInputRef}
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  placeholder="Enter 4-digit OTP"
                  value={customerOTP}
                  onChange={handleOTPChange}
                  maxLength={4}
                  className={`proof-input ${isOnline ? "online" : "offline"}`}
                  autoFocus
                />
                {customerOTP.length > 0 && customerOTP.length !== 4 && (
                  <p className="otp-error-message">
                    Please enter exactly 4 digits
                  </p>
                )}
                <p className={`otp-hint ${isOnline ? "online" : "offline"}`}>
                  Ask customer for OTP or use:{" "}
                  <strong>{currentDeliveryForProof?.customerOTP}</strong>
                </p>
              </div>
            </div>
          </div>

          <div className="proof-buttons">
            <button
              className={`proof-cancel-button ${
                isOnline ? "online" : "offline"
              }`}
              onClick={() => {
                setShowProofModal(false);
                setCurrentDeliveryForProof(null);
                setCustomerOTP("");
              }}
            >
              Cancel
            </button>
            <button
              className="proof-submit-button"
              onClick={handleSubmitProof}
              disabled={customerOTP.length !== 4}
            >
              <SvgIcons.Check /> Confirm Delivery
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Success Modal after delivery (keep the same UI)
  const SuccessModal = () => {
    if (!showSuccessModal || !lastDeliveryDetails) return null;

    return (
      <div className="success-modal">
        <div className="success-modal-content">
          <div className="success-icon">🎉</div>
          <h2 className="success-title">Delivery Successful!</h2>
          <p className="success-message">
            Your delivery has been completed successfully.
          </p>

          <div className="success-details">
            <p className="success-detail-item">
              <strong>Order ID:</strong> {lastDeliveryDetails.orderId}
            </p>
            <p className="success-detail-item">
              <strong>Customer:</strong> {lastDeliveryDetails.customerName}
            </p>
            <p className="success-detail-item">
              <strong>Delivery Amount:</strong>{" "}
              {formatIndianCurrency(lastDeliveryDetails.amount)}
            </p>
            {lastDeliveryDetails.tip > 0 && (
              <p className="success-detail-item" style={{ color: "#10B981" }}>
                <strong>Tip Received:</strong>{" "}
                {formatIndianCurrency(lastDeliveryDetails.tip)}
              </p>
            )}
          </div>

          <button
            className="success-ok-button"
            onClick={handleCloseSuccessModal}
          >
            Continue Delivering
          </button>
        </div>
      </div>
    );
  };

  // Cancel Order Modal (keep the same UI)
  const CancelModal = () => {
    if (!showCancelModal || !orderToCancel) return null;

    return (
      <div className="proof-modal">
        <div
          className={`proof-modal-content ${isOnline ? "online" : "offline"}`}
        >
          <h2
            className={`proof-modal-title ${isOnline ? "online" : "offline"}`}
          >
            <SvgIcons.Cancel /> Cancel Order
          </h2>

          <div className="scrollable-content">
            <div className="cancel-warning">
              <div className="warning-icon">⚠️</div>
              <p className="warning-text">
                Are you sure you want to cancel order{" "}
                <strong>{orderToCancel.orderId}</strong>?
                {acceptedOrders.some(
                  (order) => order.id === orderToCancel.id
                ) && " This will cancel your current delivery."}
              </p>
            </div>

            <div className="proof-section">
              <label
                className={`proof-label ${isOnline ? "online" : "offline"}`}
              >
                Reason for cancellation (optional)
              </label>
              <select
                ref={cancelReasonRef}
                className={`proof-input ${isOnline ? "online" : "offline"}`}
                value={cancelReason}
                onChange={(e) => setCancelReason(e.target.value)}
              >
                <option value="">Select a reason</option>
                <option value="Customer Requested">Customer Requested</option>
                <option value="Pharmacy Closed">Pharmacy Closed</option>
                <option value="Location Too Far">Location Too Far</option>
                <option value="Technical Issue">Technical Issue</option>
                <option value="Personal Reason">Personal Reason</option>
                <option value="Other">Other Reason</option>
              </select>

              {cancelReason === "Other" && (
                <input
                  type="text"
                  placeholder="Please specify reason"
                  className={`proof-input ${isOnline ? "online" : "offline"}`}
                  style={{ marginTop: "10px" }}
                  value={cancelReason === "Other" ? "" : cancelReason}
                  onChange={(e) => setCancelReason(e.target.value)}
                />
              )}
            </div>

            <div className="order-info">
              <h4 className="order-info-title">Order Details:</h4>
              <p>
                <strong>Order ID:</strong> {orderToCancel.orderId}
              </p>
              <p>
                <strong>Customer:</strong> {orderToCancel.customerName}
              </p>
              <p>
                <strong>Amount:</strong>{" "}
                {formatIndianCurrency(orderToCancel.amount)}
              </p>
              {orderToCancel.tip > 0 && (
                <p>
                  <strong>Tip:</strong>{" "}
                  {formatIndianCurrency(orderToCancel.tip)}
                </p>
              )}
              <p>
                <strong>Status:</strong>
                <span
                  style={{
                    color: getStatusColor(orderToCancel.status),
                    marginLeft: "8px",
                    fontWeight: "600",
                  }}
                >
                  {orderToCancel.status.replace("_", " ").toUpperCase()}
                </span>
              </p>
            </div>

            <div className="cancellation-notice">
              <SvgIcons.Warning />
              <span className="notice-text">
                Note: Cancelling orders may affect your delivery rating.
              </span>
            </div>
          </div>

          <div className="proof-buttons">
            <button
              className={`proof-cancel-button ${
                isOnline ? "online" : "offline"
              }`}
              onClick={() => {
                setShowCancelModal(false);
                setOrderToCancel(null);
                setCancelReason("");
              }}
            >
              Go Back
            </button>
            <button
              className="cancel-confirm-button"
              onClick={handleConfirmCancel}
              disabled={isLoading}
            >
              <SvgIcons.Cancel />{" "}
              {isLoading ? "Cancelling..." : "Confirm Cancellation"}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Cancellation Success Modal (keep the same UI)
  const CancelledSuccessModal = () => {
    if (!showCancelledSuccessModal || !lastCancelledOrder) return null;

    return (
      <div className="cancelled-success-modal">
        <div className="cancelled-success-modal-content">
          <div className="cancelled-success-icon">
            <SvgIcons.Cancel />
          </div>
          <h2 className="cancelled-success-title">Order Cancelled</h2>
          <p className="cancelled-success-message">
            Order has been successfully cancelled.
          </p>

          <div className="cancelled-success-details">
            <p className="cancelled-success-detail-item">
              <strong>Order ID:</strong> {lastCancelledOrder.orderId}
            </p>
            <p className="cancelled-success-detail-item">
              <strong>Customer:</strong> {lastCancelledOrder.customerName}
            </p>
            <p className="cancelled-success-detail-item">
              <strong>Amount:</strong>{" "}
              {formatIndianCurrency(lastCancelledOrder.amount)}
            </p>
            {lastCancelledOrder.tip > 0 && (
              <p className="cancelled-success-detail-item">
                <strong>Tip Lost:</strong>{" "}
                {formatIndianCurrency(lastCancelledOrder.tip)}
              </p>
            )}
            <p className="cancelled-success-detail-item">
              <strong>Reason:</strong> {lastCancelledOrder.cancelReason}
            </p>
            <p className="cancelled-success-detail-item">
              <strong>Cancelled At:</strong> {lastCancelledOrder.cancelledTime}
            </p>
          </div>

          <div className="cancelled-stats-update">
            <p className="stats-update-text">
              <strong>Cancelled Orders Today:</strong> {cancelledOrders.length}
            </p>
            <p className="stats-update-text">
              <strong>Cancellation Rate:</strong>{" "}
              {(
                (cancelledOrders.length /
                  (completedOrders.length +
                    cancelledOrders.length +
                    acceptedOrders.length)) *
                100
              ).toFixed(1)}
              %
            </p>
          </div>

          <button
            className="cancelled-success-ok-button"
            onClick={handleCloseCancelledSuccessModal}
          >
            Continue
          </button>
        </div>
      </div>
    );
  };

  // Details Modal (keep the same UI)
  const DetailsModal = () => {
    if (!showDetailsModal || !selectedTaskDetails) return null;

    const task = selectedTaskDetails;

    return (
      <div className="details-modal">
        <div
          className={`details-modal-content ${isOnline ? "online" : "offline"}`}
        >
          <h2
            className={`details-modal-title ${isOnline ? "online" : "offline"}`}
          >
            <SvgIcons.Info /> Order Details
          </h2>

          <div className="scrollable-content">
            <div className="details-section">
              <h3
                className={`details-section-title ${
                  isOnline ? "online" : "offline"
                }`}
              >
                📦 Order Information
              </h3>
              <div className="details-grid">
                <div className="detail-item">
                  <span
                    className={`detail-label ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    <SvgIcons.Info /> Order ID
                  </span>
                  <span
                    className={`detail-value ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    {task.orderId}
                  </span>
                </div>
                <div className="detail-item">
                  <span
                    className={`detail-label ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    Status
                  </span>
                  <span
                    className={`detail-value ${
                      isOnline ? "online" : "offline"
                    }`}
                    style={{ color: getStatusColor(task.status) }}
                  >
                    {task.status.replace("_", " ").toUpperCase()}
                  </span>
                </div>
                <div className="detail-item">
                  <span
                    className={`detail-label ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    Priority
                  </span>
                  <span
                    className={`detail-value ${
                      isOnline ? "online" : "offline"
                    }`}
                    style={{ color: getPriorityColor(task.priority) }}
                  >
                    {task.priority}
                  </span>
                </div>
                <div className="detail-item">
                  <span
                    className={`detail-label ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    <SvgIcons.Calendar /> Order Time
                  </span>
                  <span
                    className={`detail-value ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    {task.orderTime || "2:30 PM"}
                  </span>
                </div>
              </div>
            </div>

            <div className="details-section">
              <h3
                className={`details-section-title ${
                  isOnline ? "online" : "offline"
                }`}
              >
                <SvgIcons.User /> Customer Details
              </h3>
              <div className="details-grid">
                <div className="detail-item">
                  <span
                    className={`detail-label ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    Name
                  </span>
                  <span
                    className={`detail-value ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    {task.customerName}
                  </span>
                </div>
                <div className="detail-item">
                  <span
                    className={`detail-label ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    <SvgIcons.Phone /> Phone
                  </span>
                  <span
                    className={`detail-value ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    {task.customerPhone}
                  </span>
                </div>
                <div className="detail-item">
                  <span
                    className={`detail-label ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    <SvgIcons.Home /> Location
                  </span>
                  <span
                    className={`detail-value ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    {task.deliveryLocation}
                  </span>
                </div>
              </div>
            </div>

            <div className="details-section">
              <h3
                className={`details-section-title ${
                  isOnline ? "online" : "offline"
                }`}
              >
                <SvgIcons.Hospital /> Pharmacy Details
              </h3>
              <div className="details-grid">
                <div className="detail-item">
                  <span
                    className={`detail-label ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    Name
                  </span>
                  <span
                    className={`detail-value ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    {task.pharmacyName}
                  </span>
                </div>
                <div className="detail-item">
                  <span
                    className={`detail-label ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    <SvgIcons.Phone /> Phone
                  </span>
                  <span
                    className={`detail-value ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    {task.pharmacyPhone}
                  </span>
                </div>
                <div className="detail-item">
                  <span
                    className={`detail-label ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    Location
                  </span>
                  <span
                    className={`detail-value ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    {task.pharmacyLocation}
                  </span>
                </div>
              </div>
            </div>

            {task.medicines && task.medicines.length > 0 && (
              <div className="details-section">
                <h3
                  className={`details-section-title ${
                    isOnline ? "online" : "offline"
                  }`}
                >
                  💊 Medicines
                </h3>
                {getMedicines(task).map((medicine, index) => (
                  <div
                    key={index}
                    className={`medicine-detail-item ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    <h4
                      className={`medicine-name ${
                        isOnline ? "online" : "offline"
                      }`}
                    >
                      <SvgIcons.Info /> {medicine.name}
                    </h4>
                    <p
                      className={`medicine-quantity ${
                        isOnline ? "online" : "offline"
                      }`}
                    >
                      Quantity: {medicine.quantity}
                    </p>
                  </div>
                ))}
              </div>
            )}

            <div className="details-section">
              <h3
                className={`details-section-title ${
                  isOnline ? "online" : "offline"
                }`}
              >
                <SvgIcons.Money /> Payment Details
              </h3>
              <div className="details-grid">
                <div className="detail-item">
                  <span
                    className={`detail-label ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    Amount
                  </span>
                  <span
                    className={`detail-value ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    {formatIndianCurrency(task.amount)}
                  </span>
                </div>
                <div className="detail-item">
                  <span
                    className={`detail-label ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    Tip
                  </span>
                  <span
                    className={`detail-value ${
                      isOnline ? "online" : "offline"
                    }`}
                    style={{ color: "#10B981" }}
                  >
                    {formatIndianCurrency(task.tip || 0)}
                  </span>
                </div>
                <div className="detail-item">
                  <span
                    className={`detail-label ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    Payment Method
                  </span>
                  <span
                    className={`detail-value ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    {task.paymentMethod || "Cash on Delivery"}
                  </span>
                </div>
                <div className="detail-item">
                  <span
                    className={`detail-label ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    <SvgIcons.Time /> Estimated Time
                  </span>
                  <span
                    className={`detail-value ${
                      isOnline ? "online" : "offline"
                    }`}
                  >
                    {task.estimatedTime}
                  </span>
                </div>
              </div>
            </div>

            <div className="details-section">
              <h3
                className={`details-section-title ${
                  isOnline ? "online" : "offline"
                }`}
              >
                📝 Instructions
              </h3>
              <p
                className={`detail-value ${isOnline ? "online" : "offline"}`}
                style={{ fontSize: "12px" }}
              >
                {task.instructions}
              </p>
              {task.specialInstructions && (
                <p
                  className={`detail-value ${isOnline ? "online" : "offline"}`}
                  style={{
                    fontSize: "12px",
                    color: "#009688",
                    marginTop: "8px",
                  }}
                >
                  <strong>Special Instructions:</strong>{" "}
                  {task.specialInstructions}
                </p>
              )}
            </div>
          </div>

          <button
            className="details-close-button"
            onClick={handleCloseDetailsModal}
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  return (
    <div
      className={`dashboard-main-content ${isOnline ? "online" : "offline"}`}
    >
      <audio ref={audioRef} src="/Audio.mp4" preload="auto" />
      <ProofModal />
      <SuccessModal />
      <CancelModal />
      <CancelledSuccessModal />
      <DetailsModal />

      <div className="dashboard-header">
        <div>
          <h1 className={`greeting-text ${isOnline ? "online" : "offline"}`}>
            {getCurrentGreeting()}, {getDisplayName()}
          </h1>
          <p className={`subtitle-text ${isOnline ? "online" : "offline"}`}>
            {isOnline
              ? "Here's your delivery overview for today"
              : "You are currently offline - Go online to receive delivery requests"}
          </p>
        </div>
        <div className="dashboard-header-actions">
          <div
            className={`online-status-container ${
              isOnline ? "online" : "offline"
            }`}
          >
            <span
              className={`status-dot ${isOnline ? "online" : "offline"}`}
            ></span>
            <span className={`status-text ${isOnline ? "online" : "offline"}`}>
              {isOnline ? "Online" : "Offline"}
            </span>
            <button
              className={`status-toggle-button ${
                isOnline ? "online" : "offline"
              }`}
              onClick={handleToggleOnline}
              disabled={isLoading}
            >
              {isLoading ? "Loading..." : isOnline ? "Go Offline" : "Go Online"}
            </button>
          </div>
          <div className={`date-display ${isOnline ? "online" : "offline"}`}>
            {new Date().toLocaleDateString("en-US", {
              weekday: "short",
              year: "numeric",
              month: "short",
              day: "numeric",
            })}
          </div>
          <div className="dashboard-action-buttons">
            <button
              className={`notification-button ${
                isOnline ? "online" : "offline"
              }`}
              onClick={safeToggleNotifications}
            >
              <SvgIcons.Bell />
              {safeGetUnreadCount() > 0 && (
                <span className="notification-badge">
                  {safeGetUnreadCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Incentives Section - Always Visible */}
      <div className={`incentives-section ${isOnline ? "online" : "offline"}`}>
        <div className="incentives-header">
          <h2 className={`section-title ${isOnline ? "online" : "offline"}`}>
            Your Earnings & Performance
          </h2>
          {cancelledOrders.length > 0 && (
            <div className="performance-warning">
              <SvgIcons.Warning />
              <span>Cancellations: {cancelledOrders.length}</span>
            </div>
          )}
        </div>
        <div className="incentives-grid">
          <div className={`incentive-card ${isOnline ? "online" : "offline"}`}>
            <h3
              className={`incentive-amount ${isOnline ? "online" : "offline"}`}
            >
              {formatIndianCurrency(incentives.today)}
            </h3>
            <p className={`incentive-label ${isOnline ? "online" : "offline"}`}>
              Today's Earnings
            </p>
            {incentives.customerTips > 0 && (
              <p
                className={`incentive-label ${isOnline ? "online" : "offline"}`}
                style={{ fontSize: "11px", marginTop: "4px" }}
              >
                Includes {formatIndianCurrency(incentives.customerTips)} tips
              </p>
            )}
          </div>
          <div className={`incentive-card ${isOnline ? "online" : "offline"}`}>
            <h3
              className={`incentive-amount ${isOnline ? "online" : "offline"}`}
            >
              {incentives.completedDeliveries}
            </h3>
            <p className={`incentive-label ${isOnline ? "online" : "offline"}`}>
              Completed
            </p>
            {incentives.bonusEligible && (
              <span className="bonus-badge">Bonus Eligible</span>
            )}
          </div>
          <div className={`incentive-card ${isOnline ? "online" : "offline"}`}>
            <h3
              className={`incentive-amount ${isOnline ? "online" : "offline"}`}
            >
              {availableOrders.length}
            </h3>
            <p className={`incentive-label ${isOnline ? "online" : "offline"}`}>
              Available
            </p>
          </div>
          <div className={`incentive-card ${isOnline ? "online" : "offline"}`}>
            <h3
              className={`incentive-amount ${isOnline ? "online" : "offline"}`}
              style={{ color: "#EF4444" }}
            >
              {incentives.cancelledDeliveries}
              {cancelledOrders.length > 0 && (
                <span className="cancelled-badge">
                  Today: {cancelledOrders.length}
                </span>
              )}
            </h3>
            <p className={`incentive-label ${isOnline ? "online" : "offline"}`}>
              Cancelled
            </p>
            {cancelledOrders.length > 0 && (
              <p
                className={`incentive-label ${isOnline ? "online" : "offline"}`}
                style={{ fontSize: "11px", marginTop: "4px", color: "#EF4444" }}
              >
                {(
                  (cancelledOrders.length /
                    (completedOrders.length +
                      cancelledOrders.length +
                      acceptedOrders.length)) *
                  100
                ).toFixed(1)}
                % rate
              </p>
            )}
          </div>
        </div>
      </div>

      {/* Real-time Stats Grid - Always Visible */}
      <div className="stats-grid">
        <div
          className={`stat-card ${isOnline ? "online" : "offline"} ${
            selectedStat === "totalToday" ? "active" : ""
          }`}
          onClick={() => handleStatClick("totalToday")}
        >
          <div className={`stat-icon ${isOnline ? "online" : "offline"}`}>
            <SvgIcons.Package />
          </div>
          <div className="stat-content">
            <h3 className={`stat-number ${isOnline ? "online" : "offline"}`}>
              {completedOrders.length +
                acceptedOrders.length +
                cancelledOrders.length}
            </h3>
            <p className={`stat-label ${isOnline ? "online" : "offline"}`}>
              Total Orders Today
            </p>
          </div>
        </div>

        <div
          className={`stat-card ${isOnline ? "online" : "offline"} ${
            selectedStat === "pending" ? "active" : ""
          }`}
          onClick={() => handleStatClick("pending")}
        >
          <div className={`stat-icon ${isOnline ? "online" : "offline"}`}>
            <SvgIcons.Clock />
          </div>
          <div className="stat-content">
            <h3 className={`stat-number ${isOnline ? "online" : "offline"}`}>
              {availableOrders.length}
            </h3>
            <p className={`stat-label ${isOnline ? "online" : "offline"}`}>
              Available Orders
            </p>
          </div>
        </div>

        <div
          className={`stat-card ${isOnline ? "online" : "offline"} ${
            selectedStat === "inProgress" ? "active" : ""
          }`}
          onClick={() => handleStatClick("inProgress")}
        >
          <div className={`stat-icon ${isOnline ? "online" : "offline"}`}>
            <SvgIcons.Truck />
          </div>
          <div className="stat-content">
            <h3 className={`stat-number ${isOnline ? "online" : "offline"}`}>
              {acceptedOrders.filter((o) => o.status !== "assigned").length}
            </h3>
            <p className={`stat-label ${isOnline ? "online" : "offline"}`}>
              In Progress
            </p>
          </div>
        </div>

        <div
          className={`stat-card ${isOnline ? "online" : "offline"} ${
            selectedStat === "completed" ? "active" : ""
          }`}
          onClick={() => handleStatClick("completed")}
        >
          <div className={`stat-icon ${isOnline ? "online" : "offline"}`}>
            <SvgIcons.CheckCircle />
          </div>
          <div className="stat-content">
            <h3 className={`stat-number ${isOnline ? "online" : "offline"}`}>
              {completedOrders.length}
            </h3>
            <p className={`stat-label ${isOnline ? "online" : "offline"}`}>
              Delivered
            </p>
          </div>
        </div>

        <div
          className={`stat-card ${isOnline ? "online" : "offline"} ${
            selectedStat === "cancelled" ? "active" : ""
          } ${cancelledOrders.length > 0 ? "cancelled-updated" : ""}`}
          onClick={() => handleStatClick("cancelled")}
        >
          <div className={`stat-icon ${isOnline ? "online" : "offline"}`}>
            <SvgIcons.Cancel />
          </div>
          <div className="stat-content">
            <h3
              className={`stat-number ${isOnline ? "online" : "offline"}`}
              style={{ color: "#EF4444" }}
            >
              {cancelledOrders.length}
            </h3>
            <p className={`stat-label ${isOnline ? "online" : "offline"}`}>
              Cancelled Orders
            </p>
            <div
              className="cancel-recent"
              style={{ fontSize: "10px", color: "#EF4444", marginTop: "4px" }}
            >
              {cancelledOrders.length > 0
                ? "Recently updated"
                : "No cancellations"}
            </div>
          </div>
        </div>

        <div
          className={`stat-card ${isOnline ? "online" : "offline"} ${
            selectedStat === "todayEarnings" ? "active" : ""
          }`}
          onClick={() => handleStatClick("todayEarnings")}
        >
          <div className={`stat-icon ${isOnline ? "online" : "offline"}`}>
            <SvgIcons.Rupee />
          </div>
          <div className="stat-content">
            <h3 className={`stat-number ${isOnline ? "online" : "offline"}`}>
              {formatIndianCurrency(incentives.today)}
            </h3>
            <p className={`stat-label ${isOnline ? "online" : "offline"}`}>
              Today's Earnings
            </p>
          </div>
        </div>
      </div>

      <div className="content-grid">
        <div className={`section ${isOnline ? "online" : "offline"}`}>
          <div className="section-header">
            <h2 className={`section-title ${isOnline ? "online" : "offline"}`}>
              {acceptedOrders.length > 0
                ? "Current Delivery"
                : availableOrders.length > 0
                ? "Available Deliveries"
                : isOnline
                ? "Waiting for Orders..."
                : "Offline Mode"}
            </h2>
            {(completedOrders.length > 0 || cancelledOrders.length > 0) && (
              <span className="view-all-link" onClick={handleViewAllTasks}>
                View History
              </span>
            )}
          </div>

          {/* Delivery Progress Tracker - Show when there's an accepted order */}
          {acceptedOrders.length > 0 && (
            <div
              className={`delivery-progress ${isOnline ? "online" : "offline"}`}
            >
              {getProgressSteps()}
            </div>
          )}

          {/* Show status message when offline and no orders */}
          {!isOnline &&
            acceptedOrders.length === 0 &&
            availableOrders.length === 0 && (
              <div className="offline-status-message">
                <p>
                  You are currently offline. Go online to receive delivery
                  requests.
                </p>
              </div>
            )}

          <div className="tasks-list">
            {acceptedOrders.length > 0
              ? acceptedOrders.map((task) => (
                  <div
                    key={task.id}
                    className={`task-card ${isOnline ? "online" : "offline"}`}
                  >
                    <div className="task-header">
                      <div className="task-info">
                        <h4
                          className={`order-id ${
                            isOnline ? "online" : "offline"
                          }`}
                        >
                          <SvgIcons.Info /> {task.orderId}
                        </h4>
                        <p
                          className={`customer-name ${
                            isOnline ? "online" : "offline"
                          }`}
                        >
                          <SvgIcons.User /> {task.customerName}
                        </p>
                      </div>
                      <div className="task-status">
                        <span
                          className="status-badge"
                          style={{
                            backgroundColor: getStatusColor(task.status),
                          }}
                        >
                          <SvgIcons.Check />{" "}
                          {task.status.replace("_", " ").toUpperCase()}
                        </span>
                        <span
                          className="priority-badge"
                          style={{ color: getPriorityColor(task.priority) }}
                        >
                          {task.priority}
                        </span>
                      </div>
                    </div>

                    <div className="task-details">
                      {/* Pharmacy Location */}
                      <div className="location-row">
                        <span
                          className={`location-label ${
                            isOnline ? "online" : "offline"
                          }`}
                        >
                          <SvgIcons.Hospital /> Pharmacy:
                        </span>
                        <span
                          className={`location-text ${
                            isOnline ? "online" : "offline"
                          }`}
                        >
                          {task.pharmacyLocation}
                          <div className="contact-info">
                            <button
                              className={`contact-button ${
                                isOnline ? "online" : "offline"
                              }`}
                              onClick={() =>
                                handleCallPharmacy(task.pharmacyPhone)
                              }
                            >
                              <SvgIcons.Phone /> Call Pharmacy
                            </button>
                            <button
                              className="direction-button"
                              onClick={() =>
                                handleGetDirections(task.pharmacyLocation)
                              }
                            >
                              <SvgIcons.MapPin /> Get Directions
                            </button>
                          </div>
                        </span>
                      </div>

                      {/* Delivery Location */}
                      <div className="location-row">
                        <span
                          className={`location-label ${
                            isOnline ? "online" : "offline"
                          }`}
                        >
                          <SvgIcons.Home /> Delivery:
                        </span>
                        <span
                          className={`location-text ${
                            isOnline ? "online" : "offline"
                          }`}
                        >
                          {task.deliveryLocation}
                          <div className="contact-info">
                            <button
                              className={`contact-button ${
                                isOnline ? "online" : "offline"
                              }`}
                              onClick={() =>
                                handleCallCustomer(task.customerPhone)
                              }
                            >
                              <SvgIcons.Phone /> Call Customer
                            </button>
                            <button
                              className="customer-direction-button"
                              onClick={() =>
                                handleGetDirections(task.deliveryLocation, true)
                              }
                            >
                              <SvgIcons.MapPin /> Customer Directions
                            </button>
                          </div>
                        </span>
                      </div>
                    </div>

                    <div className="task-meta">
                      <span
                        className={`meta-item ${
                          isOnline ? "online" : "offline"
                        }`}
                      >
                        <SvgIcons.Time /> {task.estimatedTime}
                      </span>
                      <span
                        className={`meta-item ${
                          isOnline ? "online" : "offline"
                        }`}
                      >
                        <SvgIcons.Distance /> {task.distance}
                      </span>
                      <span
                        className={`meta-item ${
                          isOnline ? "online" : "offline"
                        }`}
                      >
                        <SvgIcons.Money /> {formatIndianCurrency(task.amount)}
                      </span>
                      {task.tip > 0 && (
                        <span
                          className={`meta-item ${
                            isOnline ? "online" : "offline"
                          }`}
                          style={{ color: "#10B981", fontWeight: "600" }}
                        >
                          💝 Tip: {formatIndianCurrency(task.tip)}
                        </span>
                      )}
                    </div>

                    <div className="task-actions">
                      {task.status === "assigned" && (
                        <>
                          <button
                            className="primary-button"
                            onClick={() => handleReachedPharmacy(task)}
                          >
                            <SvgIcons.Hospital /> I've Reached Pharmacy
                          </button>
                          <button
                            className="direction-button"
                            onClick={() =>
                              handleGetDirections(task.pharmacyLocation)
                            }
                          >
                            <SvgIcons.MapPin /> Directions to Pharmacy
                          </button>
                        </>
                      )}

                      {task.status === "pickup_reached" && (
                        <button
                          className="success-button"
                          onClick={() => handlePickupCompleted(task)}
                        >
                          <SvgIcons.Check /> Pickup Completed
                        </button>
                      )}

                      {task.status === "pickup_completed" && (
                        <>
                          <button
                            className="primary-button"
                            onClick={() => handleReachedCustomer(task)}
                          >
                            <SvgIcons.Home /> I've Reached Customer
                          </button>
                          <button
                            className="customer-direction-button"
                            onClick={() =>
                              handleGetDirections(task.deliveryLocation, true)
                            }
                            style={{ padding: "8px 12px", fontSize: "12px" }}
                          >
                            <SvgIcons.MapPin /> Customer Directions
                          </button>
                        </>
                      )}

                      {task.status === "delivery_reached" && (
                        <button
                          className="success-button"
                          onClick={() => handleOpenProofModal(task)}
                        >
                          <SvgIcons.Check /> Complete Delivery
                        </button>
                      )}

                      <button
                        className="cancel-order-button"
                        onClick={() => handleCancelOrder(task)}
                      >
                        <SvgIcons.Cancel /> Cancel Order
                      </button>

                      <button
                        className="secondary-button"
                        onClick={() => handleViewDetails(task)}
                      >
                        <SvgIcons.Info /> View Details
                      </button>
                    </div>
                  </div>
                ))
              : availableOrders.map((task) => (
                  <div
                    key={task.id}
                    className={`task-card ${isOnline ? "online" : "offline"}`}
                  >
                    <div className="task-header">
                      <div className="task-info">
                        <h4
                          className={`order-id ${
                            isOnline ? "online" : "offline"
                          }`}
                        >
                          <SvgIcons.Info /> {task.orderId}
                        </h4>
                        <p
                          className={`customer-name ${
                            isOnline ? "online" : "offline"
                          }`}
                        >
                          <SvgIcons.User /> {task.customerName}
                        </p>
                      </div>
                      <div className="task-status">
                        <span
                          className="status-badge"
                          style={{
                            backgroundColor: getStatusColor(task.status),
                          }}
                        >
                          {task.status}
                        </span>
                        <span
                          className="priority-badge"
                          style={{ color: getPriorityColor(task.priority) }}
                        >
                          {task.priority}
                        </span>
                      </div>
                    </div>

                    <div className="task-details">
                      <div className="location-row">
                        <span
                          className={`location-label ${
                            isOnline ? "online" : "offline"
                          }`}
                        >
                          <SvgIcons.Hospital /> Pharmacy:
                        </span>
                        <span
                          className={`location-text ${
                            isOnline ? "online" : "offline"
                          }`}
                        >
                          {task.pharmacyLocation}
                        </span>
                      </div>
                      <div className="location-row">
                        <span
                          className={`location-label ${
                            isOnline ? "online" : "offline"
                          }`}
                        >
                          <SvgIcons.Home /> Delivery:
                        </span>
                        <span
                          className={`location-text ${
                            isOnline ? "online" : "offline"
                          }`}
                        >
                          {task.deliveryLocation}
                          <button
                            className="customer-direction-button"
                            onClick={() =>
                              handleGetDirections(task.deliveryLocation, true)
                            }
                          >
                            <SvgIcons.MapPin /> Customer Directions
                          </button>
                        </span>
                      </div>
                    </div>

                    <div className="task-meta">
                      <span
                        className={`meta-item ${
                          isOnline ? "online" : "offline"
                        }`}
                      >
                        <SvgIcons.Time /> {task.estimatedTime}
                      </span>
                      <span
                        className={`meta-item ${
                          isOnline ? "online" : "offline"
                        }`}
                      >
                        <SvgIcons.Distance /> {task.distance}
                      </span>
                      <span
                        className={`meta-item ${
                          isOnline ? "online" : "offline"
                        }`}
                      >
                        <SvgIcons.Money /> {formatIndianCurrency(task.amount)}
                      </span>
                      {task.tip > 0 && (
                        <span
                          className={`meta-item ${
                            isOnline ? "online" : "offline"
                          }`}
                          style={{ color: "#10B981", fontWeight: "600" }}
                        >
                          💝 Tip: {formatIndianCurrency(task.tip)}
                        </span>
                      )}
                    </div>

                    <div className="task-actions">
                      <button
                        className="accept-button"
                        onClick={() => handleAcceptOrder(task)}
                        disabled={isLoading}
                      >
                        <SvgIcons.Check />{" "}
                        {isLoading ? "Accepting..." : "Accept Delivery"}
                      </button>
                      <button
                        className="cancel-order-button"
                        onClick={() => handleCancelAvailableOrder(task)}
                      >
                        <SvgIcons.Cancel /> Cancel Order
                      </button>
                      <button
                        className="secondary-button"
                        onClick={() => handleViewDetails(task)}
                      >
                        <SvgIcons.Info /> View Details
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>

        <div className="sidebar-section">
          {/* Live Route Tracker - Always visible but shows different content based on status */}
          <LiveRouteTracker
            deliveryData={deliveryData}
            isOnline={isOnline}
            currentOrder={acceptedOrders.length > 0 ? acceptedOrders[0] : null}
            currentStep={currentStep}
          />

          {/* Recent Cancelled Orders Section */}
          {cancelledOrders.length > 0 && (
            <div
              className={`delivery-history-section ${
                isOnline ? "online" : "offline"
              }`}
            >
              <div className="section-header">
                <h2
                  className={`section-title ${isOnline ? "online" : "offline"}`}
                  style={{ color: "#EF4444" }}
                >
                  <SvgIcons.Cancel /> Recent Cancellations
                </h2>
                <span className="view-all-link" onClick={handleViewAllTasks}>
                  View All
                </span>
              </div>
              <div className="tasks-list">
                {cancelledOrders
                  .slice(-3)
                  .reverse()
                  .map((order, index) => (
                    <div
                      key={order.id}
                      className={`history-item ${
                        isOnline ? "online" : "offline"
                      } cancelled`}
                    >
                      <h4
                        className={`history-order-id ${
                          isOnline ? "online" : "offline"
                        }`}
                        style={{ color: "#EF4444" }}
                      >
                        <SvgIcons.Cancel /> {order.orderId}
                      </h4>
                      <p
                        className={`history-details ${
                          isOnline ? "online" : "offline"
                        }`}
                      >
                        {order.customerName} •{" "}
                        {formatIndianCurrency(order.amount)}
                      </p>
                      <p
                        className={`history-time ${
                          isOnline ? "online" : "offline"
                        }`}
                      >
                        <SvgIcons.Time /> Cancelled:{" "}
                        {order.cancelledAt?.toLocaleTimeString() || "Just now"}
                      </p>
                      {order.cancelReason && (
                        <p className="cancel-reason">
                          Reason: {order.cancelReason}
                        </p>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          )}

          {/* Delivery History Section */}
          {completedOrders.length > 0 && (
            <div
              className={`delivery-history-section ${
                isOnline ? "online" : "offline"
              }`}
            >
              <div className="section-header">
                <h2
                  className={`section-title ${isOnline ? "online" : "offline"}`}
                >
                  Recent Deliveries
                </h2>
                <span className="view-all-link" onClick={handleViewAllTasks}>
                  View All
                </span>
              </div>
              <div className="tasks-list">
                {completedOrders
                  .slice(-3)
                  .reverse()
                  .map((order, index) => (
                    <div
                      key={order.id}
                      className={`history-item ${
                        isOnline ? "online" : "offline"
                      }`}
                    >
                      <h4
                        className={`history-order-id ${
                          isOnline ? "online" : "offline"
                        }`}
                      >
                        <SvgIcons.Info /> {order.orderId}
                      </h4>
                      <p
                        className={`history-details ${
                          isOnline ? "online" : "offline"
                        }`}
                      >
                        {order.customerName} •{" "}
                        {formatIndianCurrency(order.amount)}
                        {order.tip > 0 &&
                          ` + ${formatIndianCurrency(order.tip)} tip`}
                      </p>
                      <p
                        className={`history-time ${
                          isOnline ? "online" : "offline"
                        }`}
                      >
                        <SvgIcons.Time /> Delivered:{" "}
                        {order.deliveredAt?.toLocaleTimeString() || "Just now"}
                      </p>
                    </div>
                  ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* AI Chat Button */}
      <button
        className="ai-chat-button"
        onClick={safeToggleAIChat}
        title="AI Assistant"
      >
        <SvgIcons.Chat />
      </button>
    </div>
  );
};

// Add default props to prevent errors
Dashboard.defaultProps = {
  profileData: {},
  deliveryData: {},
  isOnline: false,
  toggleOnlineStatus: () => {},
  setSelectedTask: () => {},
  toggleNotifications: () => {},
  getUnreadCount: () => 0,
  toggleAIChat: () => {},
  setActivePage: () => {},
};

export default Dashboard;
