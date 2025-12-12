// // import React, { useState, useEffect, useRef } from "react";
// // import LiveRouteTracker from "./LiveRouteTracker";
// // import "./Dashboard.css";

// // const Dashboard = ({
// //   profileData,
// //   deliveryData,
// //   isOnline: propIsOnline,
// //   toggleOnlineStatus,
// //   setSelectedTask,
// //   toggleNotifications,
// //   getUnreadCount,
// //   toggleAIChat,
// //   setActivePage,
// // }) => {
// //   const [selectedStat, setSelectedStat] = useState(null);
// //   const [isOnline, setIsOnline] = useState(false); // Default offline
// //   const [acceptedOrders, setAcceptedOrders] = useState([]);
// //   const [completedOrders, setCompletedOrders] = useState([]);
// //   const [availableOrders, setAvailableOrders] = useState([]);
// //   const [currentStep, setCurrentStep] = useState("available");
// //   const [incentives, setIncentives] = useState({
// //     today: 65,
// //     weekly: 420,
// //     monthly: 1800,
// //     completedDeliveries: 1,
// //     bonusEligible: true,
// //     customerTips: 25,
// //     joiningBonus: 500,
// //     referralBonus: 200,
// //     dailyTarget: 300,
// //     dailyOrdersCompleted: 1,
// //     dailyTargetAchieved: false,
// //   });
// //   const [showProofModal, setShowProofModal] = useState(false);
// //   const [showSuccessModal, setShowSuccessModal] = useState(false);
// //   const [showDetailsModal, setShowDetailsModal] = useState(false);
// //   const [currentDeliveryForProof, setCurrentDeliveryForProof] = useState(null);
// //   const [selectedTaskDetails, setSelectedTaskDetails] = useState(null);
// //   const [proofImage, setProofImage] = useState(null);
// //   const [proofSignature, setProofSignature] = useState(null);
// //   const [customerOTP, setCustomerOTP] = useState("");
// //   const [isDrawing, setIsDrawing] = useState(false);
// //   const [lastDeliveryDetails, setLastDeliveryDetails] = useState(null);

// //   const audioRef = useRef(null);
// //   const notificationIntervalRef = useRef(null);
// //   const proofImageInputRef = useRef(null);
// //   const signatureCanvasRef = useRef(null);
// //   const otpInputRef = useRef(null);

// //   // Safe function calls
// //   const safeSetActivePage = (page) => {
// //     if (typeof setActivePage === "function") {
// //       setActivePage(page);
// //     }
// //   };

// //   const safeToggleOnlineStatus = (status) => {
// //     if (typeof toggleOnlineStatus === "function") {
// //       toggleOnlineStatus(status);
// //     }
// //   };

// //   const safeSetSelectedTask = (task) => {
// //     if (typeof setSelectedTask === "function") {
// //       setSelectedTask(task);
// //     }
// //   };

// //   const safeToggleNotifications = () => {
// //     if (typeof toggleNotifications === "function") {
// //       toggleNotifications();
// //     }
// //   };

// //   const safeGetUnreadCount = () => {
// //     if (typeof getUnreadCount === "function") {
// //       return getUnreadCount();
// //     }
// //     return 0;
// //   };

// //   const safeToggleAIChat = () => {
// //     if (typeof toggleAIChat === "function") {
// //       toggleAIChat();
// //     }
// //   };

// //   // Sync with prop isOnline
// //   useEffect(() => {
// //     if (propIsOnline !== undefined) {
// //       setIsOnline(propIsOnline);
// //     }
// //   }, [propIsOnline]);

// //   const getCurrentGreeting = () => {
// //     const hour = new Date().getHours();
// //     if (hour < 12) return "Good Morning";
// //     if (hour < 18) return "Good Afternoon";
// //     return "Good Evening";
// //   };

// //   // Check for daily target achievement
// //   useEffect(() => {
// //     if (completedOrders.length >= 12 && !incentives.dailyTargetAchieved) {
// //       setIncentives((prev) => ({
// //         ...prev,
// //         dailyTargetAchieved: true,
// //         today: prev.today + prev.dailyTarget,
// //       }));
// //     }
// //   }, [completedOrders.length, incentives.dailyTargetAchieved]);

// //   // Initialize available orders with pharmacy details for Visakhapatnam
// //   useEffect(() => {
// //     if (isOnline) {
// //       const initialOrders = [
// //         {
// //           id: "ORD001",
// //           orderId: "MED001",
// //           customerName: "Rajesh Kumar",
// //           customerPhone: "+91 98765 43210",
// //           pharmacyName: "Apollo Pharmacy",
// //           pharmacyPhone: "+91 98765 43211",
// //           pharmacyLocation: "Apollo Pharmacy, MVP Colony, Visakhapatnam",
// //           deliveryLocation: "H-Block, Seethammadhara, Visakhapatnam",
// //           estimatedTime: "25 mins",
// //           distance: "3.2 km",
// //           amount: 45,
// //           tip: 10,
// //           status: "pending",
// //           priority: "High",
// //           instructions:
// //             "Handle with care. Keep medicines in original packaging.",
// //           customerOTP: Math.floor(1000 + Math.random() * 9000).toString(),
// //           medicines: [
// //             { name: "Paracetamol 500mg", quantity: "1 strip of 10 tablets" },
// //             { name: "Cetirizine 10mg", quantity: "1 strip of 10 tablets" },
// //             {
// //               name: "Vitamin C Supplements",
// //               quantity: "1 bottle of 30 tablets",
// //             },
// //           ],
// //           specialInstructions: "Please deliver before 6 PM",
// //           paymentMethod: "Cash on Delivery",
// //           orderTime: "2:30 PM",
// //         },
// //       ];
// //       setAvailableOrders(initialOrders);
// //     }
// //   }, [isOnline]);

// //   // Simulate new pharmacy orders for Visakhapatnam
// //   useEffect(() => {
// //     if (
// //       !isOnline ||
// //       acceptedOrders.length > 0 ||
// //       availableOrders.length > 0 ||
// //       incentives.dailyTargetAchieved
// //     )
// //       return;

// //     const orderInterval = setInterval(() => {
// //       setAvailableOrders((prev) => {
// //         if (prev.length >= 1) return prev;

// //         const visakhapatnamPharmacies = [
// //           {
// //             name: "Apollo Pharmacy",
// //             phone: "+91 98765 43211",
// //             area: "MVP Colony",
// //           },
// //           {
// //             name: "MedPlus Pharmacy",
// //             phone: "+91 98765 43213",
// //             area: "Dwarakanagar",
// //           },
// //           {
// //             name: "Fortis Pharmacy",
// //             phone: "+91 98765 43215",
// //             area: "Siripuram",
// //           },
// //           {
// //             name: "Max Healthcare Pharmacy",
// //             phone: "+91 98765 43217",
// //             area: "Gajuwaka",
// //           },
// //           {
// //             name: "City Pharmacy",
// //             phone: "+91 98765 43219",
// //             area: "Akkayyapalem",
// //           },
// //         ];

// //         const visakhapatnamAreas = [
// //           "MVP Colony",
// //           "Dwarakanagar",
// //           "Siripuram",
// //           "Gajuwaka",
// //           "Akkayyapalem",
// //           "Seethammadhara",
// //           "Madhurawada",
// //           "Pendurthi",
// //           "Anakapalle",
// //           "Bheemili",
// //         ];

// //         const pharmacy =
// //           visakhapatnamPharmacies[
// //             Math.floor(Math.random() * visakhapatnamPharmacies.length)
// //           ];
// //         const deliveryArea = visakhapatnamAreas.filter(
// //           (a) => a !== pharmacy.area
// //         )[Math.floor(Math.random() * (visakhapatnamAreas.length - 1))];

// //         const tipAmount =
// //           Math.random() > 0.3 ? Math.floor(Math.random() * 30) + 5 : 0;
// //         const medicineList = [
// //           [
// //             { name: "Paracetamol 500mg", quantity: "1 strip" },
// //             { name: "Cetirizine 10mg", quantity: "1 strip" },
// //           ],
// //           [
// //             { name: "Amoxicillin 500mg", quantity: "10 capsules" },
// //             { name: "Vitamin D3", quantity: "1 bottle" },
// //           ],
// //           [
// //             { name: "Ibuprofen 400mg", quantity: "1 strip" },
// //             { name: "ORS Packets", quantity: "5 packets" },
// //           ],
// //           [
// //             { name: "Azithromycin 500mg", quantity: "3 tablets" },
// //             { name: "Cough Syrup", quantity: "1 bottle" },
// //           ],
// //         ];

// //         const newOrder = {
// //           id: `ORD${Date.now()}`,
// //           orderId: `MED${Date.now().toString().slice(-4)}`,
// //           customerName: [
// //             "Amit Sharma",
// //             "Neha Gupta",
// //             "Rohit Verma",
// //             "Sneha Patel",
// //           ][Math.floor(Math.random() * 4)],
// //           customerPhone: `+91 9${Math.floor(
// //             10000000 + Math.random() * 90000000
// //           )}`,
// //           pharmacyName: pharmacy.name,
// //           pharmacyPhone: pharmacy.phone,
// //           pharmacyLocation: `${pharmacy.name}, ${pharmacy.area}, Visakhapatnam`,
// //           deliveryLocation: `${deliveryArea}, Visakhapatnam`,
// //           estimatedTime: `${20 + Math.floor(Math.random() * 20)} mins`,
// //           distance: `${(2 + Math.random() * 4).toFixed(1)} km`,
// //           amount: 30 + Math.floor(Math.random() * 50),
// //           tip: tipAmount,
// //           status: "pending",
// //           priority: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)],
// //           instructions:
// //             "Handle with care. Keep medicines in original packaging.",
// //           customerOTP: Math.floor(1000 + Math.random() * 9000).toString(),
// //           medicines:
// //             medicineList[Math.floor(Math.random() * medicineList.length)],
// //           specialInstructions: [
// //             "Call before delivery",
// //             "Leave at doorstep",
// //             "Ring bell twice",
// //           ][Math.floor(Math.random() * 3)],
// //           paymentMethod: ["Cash on Delivery", "Online Paid"][
// //             Math.floor(Math.random() * 2)
// //           ],
// //           orderTime: new Date().toLocaleTimeString([], {
// //             hour: "2-digit",
// //             minute: "2-digit",
// //           }),
// //         };

// //         return [newOrder];
// //       });
// //     }, 30000);

// //     return () => clearInterval(orderInterval);
// //   }, [
// //     isOnline,
// //     acceptedOrders.length,
// //     availableOrders.length,
// //     incentives.dailyTargetAchieved,
// //   ]);

// //   // Notification sound system
// //   useEffect(() => {
// //     if (
// //       isOnline &&
// //       availableOrders.length > 0 &&
// //       acceptedOrders.length === 0 &&
// //       !incentives.dailyTargetAchieved
// //     ) {
// //       notificationIntervalRef.current = setInterval(() => {
// //         if (audioRef.current) {
// //           audioRef.current
// //             .play()
// //             .catch((e) => console.log("Audio play failed:", e));
// //         }
// //       }, 5000);

// //       return () => {
// //         if (notificationIntervalRef.current) {
// //           clearInterval(notificationIntervalRef.current);
// //         }
// //       };
// //     } else {
// //       if (notificationIntervalRef.current) {
// //         clearInterval(notificationIntervalRef.current);
// //       }
// //     }
// //   }, [
// //     isOnline,
// //     availableOrders.length,
// //     acceptedOrders.length,
// //     incentives.dailyTargetAchieved,
// //   ]);

// //   // Initialize signature canvas
// //   useEffect(() => {
// //     if (signatureCanvasRef.current && showProofModal) {
// //       const canvas = signatureCanvasRef.current;
// //       const ctx = canvas.getContext("2d");
// //       ctx.fillStyle = "#FFFFFF";
// //       ctx.fillRect(0, 0, canvas.width, canvas.height);
// //       ctx.strokeStyle = "#124441";
// //       ctx.lineWidth = 2;
// //       ctx.lineCap = "round";
// //       ctx.lineJoin = "round";
// //     }
// //   }, [showProofModal]);

// //   // Focus OTP input when proof modal opens
// //   useEffect(() => {
// //     if (showProofModal && otpInputRef.current) {
// //       setTimeout(() => {
// //         otpInputRef.current.focus();
// //       }, 100);
// //     }
// //   }, [showProofModal]);

// //   const formatIndianCurrency = (amount) => {
// //     return `₹${amount.toLocaleString("en-IN")}`;
// //   };

// //   const getDisplayName = () => {
// //     return profileData?.fullName?.split(" ")[0] || "User";
// //   };

// //   const getPriorityColor = (priority) => {
// //     switch (priority) {
// //       case "High":
// //         return "#EF4444";
// //       case "Medium":
// //         return "#F59E0B";
// //       case "Low":
// //         return "#10B981";
// //       default:
// //         return "#4F6F6B";
// //     }
// //   };

// //   const getStatusColor = (status) => {
// //     switch (status) {
// //       case "pending":
// //         return "#F59E0B";
// //       case "assigned":
// //         return "#F59E0B";
// //       case "pickup_reached":
// //         return "#3B82F6";
// //       case "pickup_completed":
// //         return "#8B5CF6";
// //       case "delivery_reached":
// //         return "#F59E0B";
// //       case "delivery_completed":
// //         return "#10B981";
// //       case "cancelled":
// //         return "#EF4444";
// //       default:
// //         return "#4F6F6B";
// //     }
// //   };

// //   const handleViewAllTasks = () => {
// //     safeSetActivePage("delivery-history");
// //   };

// //   const handleStatClick = (statKey) => {
// //     if (selectedStat === statKey) {
// //       setSelectedStat(null);
// //     } else {
// //       setSelectedStat(statKey);
// //     }
// //   };

// //   const handleToggleOnline = () => {
// //     const newOnlineStatus = !isOnline;
// //     setIsOnline(newOnlineStatus);

// //     if (newOnlineStatus) {
// //       setSelectedStat(null);
// //       setCurrentStep("available");
// //       // Initialize orders when going online
// //       const initialOrders = [
// //         {
// //           id: "ORD001",
// //           orderId: "MED001",
// //           customerName: "Rajesh Kumar",
// //           customerPhone: "+91 98765 43210",
// //           pharmacyName: "Apollo Pharmacy",
// //           pharmacyPhone: "+91 98765 43211",
// //           pharmacyLocation: "Apollo Pharmacy, MVP Colony, Visakhapatnam",
// //           deliveryLocation: "H-Block, Seethammadhara, Visakhapatnam",
// //           estimatedTime: "25 mins",
// //           distance: "3.2 km",
// //           amount: 45,
// //           tip: 10,
// //           status: "pending",
// //           priority: "High",
// //           instructions:
// //             "Handle with care. Keep medicines in original packaging.",
// //           customerOTP: Math.floor(1000 + Math.random() * 9000).toString(),
// //           medicines: [
// //             { name: "Paracetamol 500mg", quantity: "1 strip of 10 tablets" },
// //             { name: "Cetirizine 10mg", quantity: "1 strip of 10 tablets" },
// //             {
// //               name: "Vitamin C Supplements",
// //               quantity: "1 bottle of 30 tablets",
// //             },
// //           ],
// //           specialInstructions: "Please deliver before 6 PM",
// //           paymentMethod: "Cash on Delivery",
// //           orderTime: "2:30 PM",
// //         },
// //       ];
// //       setAvailableOrders(initialOrders);
// //     } else {
// //       setAcceptedOrders([]);
// //       setAvailableOrders([]);
// //       setCurrentStep("available");
// //     }

// //     safeToggleOnlineStatus(newOnlineStatus);
// //   };

// //   const handleAcceptOrder = (order) => {
// //     if (notificationIntervalRef.current) {
// //       clearInterval(notificationIntervalRef.current);
// //     }

// //     const acceptedOrder = {
// //       ...order,
// //       status: "assigned",
// //       acceptedAt: new Date(),
// //     };

// //     setAcceptedOrders([acceptedOrder]);
// //     setAvailableOrders([]);
// //     setCurrentStep("accepted");

// //     setIncentives((prev) => ({
// //       ...prev,
// //       today: prev.today + order.amount,
// //     }));
// //   };

// //   const handleCancelAvailableOrder = (order) => {
// //     setAvailableOrders((prev) => prev.filter((o) => o.id !== order.id));
// //   };

// //   const handleReachedPharmacy = (order) => {
// //     setAcceptedOrders((prev) =>
// //       prev.map((o) =>
// //         o.id === order.id
// //           ? { ...o, status: "pickup_reached", pharmacyReachedAt: new Date() }
// //           : o
// //       )
// //     );
// //     setCurrentStep("pickup_reached");
// //   };

// //   const handlePickupCompleted = (order) => {
// //     setAcceptedOrders((prev) =>
// //       prev.map((o) =>
// //         o.id === order.id
// //           ? { ...o, status: "pickup_completed", pickupCompletedAt: new Date() }
// //           : o
// //       )
// //     );
// //     setCurrentStep("pickup_completed");
// //   };

// //   const handleReachedCustomer = (order) => {
// //     setAcceptedOrders((prev) =>
// //       prev.map((o) =>
// //         o.id === order.id
// //           ? { ...o, status: "delivery_reached", customerReachedAt: new Date() }
// //           : o
// //       )
// //     );
// //     setCurrentStep("delivery_reached");
// //   };

// //   const handleOpenProofModal = (order) => {
// //     setCurrentDeliveryForProof(order);
// //     setShowProofModal(true);
// //   };

// //   const handleProofImageUpload = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       const reader = new FileReader();
// //       reader.onloadend = () => {
// //         setProofImage(reader.result);
// //       };
// //       reader.readAsDataURL(file);
// //     }
// //   };

// //   const handleSignatureStart = (e) => {
// //     e.preventDefault();
// //     const canvas = signatureCanvasRef.current;
// //     const rect = canvas.getBoundingClientRect();
// //     const ctx = canvas.getContext("2d");

// //     const x = e.type.includes("mouse")
// //       ? e.clientX - rect.left
// //       : e.touches[0].clientX - rect.left;
// //     const y = e.type.includes("mouse")
// //       ? e.clientY - rect.top
// //       : e.touches[0].clientY - rect.top;

// //     ctx.beginPath();
// //     ctx.moveTo(x, y);
// //     setIsDrawing(true);
// //   };

// //   const handleSignatureMove = (e) => {
// //     if (!isDrawing) return;
// //     e.preventDefault();

// //     const canvas = signatureCanvasRef.current;
// //     const rect = canvas.getBoundingClientRect();
// //     const ctx = canvas.getContext("2d");

// //     const x = e.type.includes("mouse")
// //       ? e.clientX - rect.left
// //       : e.touches[0].clientX - rect.left;
// //     const y = e.type.includes("mouse")
// //       ? e.clientY - rect.top
// //       : e.touches[0].clientY - rect.top;

// //     ctx.lineTo(x, y);
// //     ctx.stroke();
// //   };

// //   const handleSignatureEnd = () => {
// //     setIsDrawing(false);
// //     const canvas = signatureCanvasRef.current;
// //     setProofSignature(canvas.toDataURL());
// //   };

// //   const handleClearSignature = () => {
// //     const canvas = signatureCanvasRef.current;
// //     const ctx = canvas.getContext("2d");
// //     ctx.fillStyle = "#FFFFFF";
// //     ctx.fillRect(0, 0, canvas.width, canvas.height);
// //     ctx.strokeStyle = "#124441";
// //     ctx.lineWidth = 2;
// //     ctx.lineCap = "round";
// //     ctx.lineJoin = "round";
// //     setProofSignature(null);
// //   };

// //   const handleOTPChange = (e) => {
// //     const value = e.target.value.replace(/\D/g, "");
// //     if (value.length <= 4) {
// //       setCustomerOTP(value);
// //     }
// //   };

// //   const handleSubmitProof = () => {
// //     if (!customerOTP || customerOTP.length !== 4) {
// //       alert("Please enter valid 4-digit OTP");
// //       return;
// //     }

// //     if (!proofImage && !proofSignature) {
// //       alert("Please provide either photo proof or signature");
// //       return;
// //     }

// //     const deliveredOrder = {
// //       ...currentDeliveryForProof,
// //       status: "delivery_completed",
// //       deliveredAt: new Date(),
// //       proofImage,
// //       proofSignature,
// //       proofOTP: customerOTP,
// //     };

// //     setCompletedOrders((prev) => [...prev, deliveredOrder]);
// //     setAcceptedOrders([]);
// //     setCurrentStep("available");

// //     setIncentives((prev) => ({
// //       ...prev,
// //       completedDeliveries: prev.completedDeliveries + 1,
// //       dailyOrdersCompleted: prev.dailyOrdersCompleted + 1,
// //       weekly: prev.weekly + currentDeliveryForProof.amount,
// //       monthly: prev.monthly + currentDeliveryForProof.amount,
// //       today:
// //         prev.today +
// //         currentDeliveryForProof.amount +
// //         (currentDeliveryForProof.tip || 0),
// //       customerTips: prev.customerTips + (currentDeliveryForProof.tip || 0),
// //     }));

// //     // Store last delivery details for success modal
// //     setLastDeliveryDetails({
// //       orderId: currentDeliveryForProof.orderId,
// //       amount: currentDeliveryForProof.amount,
// //       tip: currentDeliveryForProof.tip || 0,
// //       customerName: currentDeliveryForProof.customerName,
// //       deliveryLocation: currentDeliveryForProof.deliveryLocation,
// //     });

// //     setShowProofModal(false);
// //     setShowSuccessModal(true);
// //     setCurrentDeliveryForProof(null);
// //     setProofImage(null);
// //     setProofSignature(null);
// //     setCustomerOTP("");
// //   };

// //   const handleCloseSuccessModal = () => {
// //     setShowSuccessModal(false);
// //     setLastDeliveryDetails(null);
// //   };

// //   const handleCancelOrder = (order) => {
// //     setAcceptedOrders((prev) => prev.filter((o) => o.id !== order.id));
// //     setAvailableOrders((prev) => [...prev, { ...order, status: "pending" }]);
// //     setCurrentStep("available");
// //   };

// //   const handleCallPharmacy = (phoneNumber) => {
// //     window.open(`tel:${phoneNumber}`, "_self");
// //   };

// //   const handleCallCustomer = (phoneNumber) => {
// //     window.open(`tel:${phoneNumber}`, "_self");
// //   };

// //   const handleGetDirections = (location, isCustomer = false) => {
// //     const locationWithCity = `${location}, Visakhapatnam, Andhra Pradesh`;
// //     const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
// //       locationWithCity
// //     )}`;
// //     window.open(mapsUrl, "_blank");
// //   };

// //   const handleViewDetails = (task) => {
// //     setSelectedTaskDetails(task);
// //     setShowDetailsModal(true);
// //   };

// //   const handleCloseDetailsModal = () => {
// //     setShowDetailsModal(false);
// //     setSelectedTaskDetails(null);
// //   };

// //   const getMedicines = (task) => {
// //     return task?.medicines || [];
// //   };

// //   // Update the progress steps
// //   const getProgressSteps = () => {
// //     const steps = [
// //       { label: "Order Accepted", key: "accepted" },
// //       { label: "Reached Pharmacy", key: "pickup_reached" },
// //       { label: "Pickup Completed", key: "pickup_completed" },
// //       { label: "Reached Customer", key: "delivery_reached" },
// //       { label: "Proof Submitted", key: "proof_submitted" },
// //     ];

// //     const currentIndex = steps.findIndex((step) => step.key === currentStep);

// //     return steps.map((step, index) => {
// //       const isCompleted = index < currentIndex;
// //       const isActive = step.key === currentStep;

// //       return (
// //         <React.Fragment key={step.key}>
// //           {index > 0 && (
// //             <div
// //               className={`progress-line ${isOnline ? "online" : "offline"} ${
// //                 isCompleted ? "completed" : ""
// //               } ${index <= currentIndex ? "active" : ""}`}
// //             />
// //           )}
// //           <div className="progress-step">
// //             <div
// //               className={`progress-dot ${isOnline ? "online" : "offline"} ${
// //                 isActive ? "active" : ""
// //               } ${isCompleted ? "completed" : ""}`}
// //             />
// //             <div
// //               className={`progress-label ${isOnline ? "online" : "offline"} ${
// //                 isActive ? "active" : ""
// //               }`}
// //             >
// //               {step.label}
// //             </div>
// //           </div>
// //         </React.Fragment>
// //       );
// //     });
// //   };

// //   // Proof of Delivery Modal
// //   const ProofModal = () => {
// //     if (!showProofModal) return null;

// //     return (
// //       <div className="proof-modal">
// //         <div
// //           className={`proof-modal-content ${isOnline ? "online" : "offline"}`}
// //         >
// //           <h2
// //             className={`proof-modal-title ${isOnline ? "online" : "offline"}`}
// //           >
// //             📦 Proof of Delivery
// //           </h2>

// //           <div className="proof-section">
// //             <label className={`proof-label ${isOnline ? "online" : "offline"}`}>
// //               🔢 Enter Customer OTP
// //             </label>
// //             <input
// //               ref={otpInputRef}
// //               type="text"
// //               inputMode="numeric"
// //               pattern="[0-9]*"
// //               placeholder="Enter 4-digit OTP shared by customer"
// //               value={customerOTP}
// //               onChange={handleOTPChange}
// //               maxLength={4}
// //               className={`proof-input ${isOnline ? "online" : "offline"}`}
// //             />
// //             <p
// //               style={{
// //                 fontSize: "12px",
// //                 color: isOnline ? "#4F6F6B" : "#E0F2F1B0",
// //                 marginTop: "-10px",
// //                 marginBottom: "15px",
// //               }}
// //             >
// //               Use mock OTP: {currentDeliveryForProof?.customerOTP}
// //             </p>
// //           </div>

// //           <div className="proof-section">
// //             <label className={`proof-label ${isOnline ? "online" : "offline"}`}>
// //               📸 Upload Delivery Photo
// //             </label>
// //             <div
// //               className={`proof-image-upload ${
// //                 isOnline ? "online" : "offline"
// //               }`}
// //               onClick={() => proofImageInputRef.current.click()}
// //             >
// //               {proofImage ? (
// //                 <img
// //                   src={proofImage}
// //                   alt="Proof"
// //                   className="proof-image-preview"
// //                 />
// //               ) : (
// //                 <>
// //                   <div style={{ fontSize: "48px", marginBottom: "10px" }}>
// //                     📷
// //                   </div>
// //                   <p
// //                     style={{
// //                       color: isOnline ? "#4F6F6B" : "#E0F2F1B0",
// //                       margin: 0,
// //                     }}
// //                   >
// //                     Click to take/upload photo
// //                   </p>
// //                   <p
// //                     style={{
// //                       fontSize: "12px",
// //                       color: isOnline ? "#9ca3af" : "#E0F2F180",
// //                       margin: "5px 0 0 0",
// //                     }}
// //                   >
// //                     Show delivered items with customer/house number
// //                   </p>
// //                 </>
// //               )}
// //             </div>
// //             <input
// //               type="file"
// //               ref={proofImageInputRef}
// //               accept="image/*"
// //               capture="environment"
// //               onChange={handleProofImageUpload}
// //               style={{ display: "none" }}
// //             />
// //           </div>

// //           <div className="proof-section">
// //             <label className={`proof-label ${isOnline ? "online" : "offline"}`}>
// //               ✍️ Customer Signature
// //             </label>
// //             <canvas
// //               ref={signatureCanvasRef}
// //               className="signature-canvas"
// //               onMouseDown={handleSignatureStart}
// //               onMouseMove={handleSignatureMove}
// //               onMouseUp={handleSignatureEnd}
// //               onMouseLeave={handleSignatureEnd}
// //               onTouchStart={handleSignatureStart}
// //               onTouchMove={handleSignatureMove}
// //               onTouchEnd={handleSignatureEnd}
// //             />
// //             <button
// //               className="secondary-button"
// //               onClick={handleClearSignature}
// //               style={{ padding: "8px 12px", fontSize: "12px" }}
// //             >
// //               🗑️ Clear Signature
// //             </button>
// //           </div>

// //           <div className="proof-buttons">
// //             <button
// //               className={`proof-cancel-button ${
// //                 isOnline ? "online" : "offline"
// //               }`}
// //               onClick={() => {
// //                 setShowProofModal(false);
// //                 setCurrentDeliveryForProof(null);
// //                 setProofImage(null);
// //                 setProofSignature(null);
// //                 setCustomerOTP("");
// //               }}
// //             >
// //               Cancel
// //             </button>
// //             <button className="proof-submit-button" onClick={handleSubmitProof}>
// //               ✅ Submit Proof & Complete Delivery
// //             </button>
// //           </div>
// //         </div>
// //       </div>
// //     );
// //   };

// //   // Success Modal after delivery
// //   const SuccessModal = () => {
// //     if (!showSuccessModal || !lastDeliveryDetails) return null;

// //     return (
// //       <div className="success-modal">
// //         <div className="success-modal-content">
// //           <div className="success-icon">🎉</div>
// //           <h2 className="success-title">Delivery Successful!</h2>
// //           <p className="success-message">
// //             Your delivery has been completed successfully. Proof has been
// //             submitted and recorded.
// //           </p>

// //           <div className="success-details">
// //             <p className="success-detail-item">
// //               <strong>Order ID:</strong> {lastDeliveryDetails.orderId}
// //             </p>
// //             <p className="success-detail-item">
// //               <strong>Customer:</strong> {lastDeliveryDetails.customerName}
// //             </p>
// //             <p className="success-detail-item">
// //               <strong>Location:</strong> {lastDeliveryDetails.deliveryLocation}
// //             </p>
// //             <p className="success-detail-item">
// //               <strong>Delivery Amount:</strong>{" "}
// //               {formatIndianCurrency(lastDeliveryDetails.amount)}
// //             </p>
// //             {lastDeliveryDetails.tip > 0 && (
// //               <p className="success-detail-item" style={{ color: "#10B981" }}>
// //                 <strong>Tip Received:</strong>{" "}
// //                 {formatIndianCurrency(lastDeliveryDetails.tip)}
// //               </p>
// //             )}
// //           </div>

// //           <button
// //             className="success-ok-button"
// //             onClick={handleCloseSuccessModal}
// //           >
// //             Got it!
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   };

// //   // Details Modal
// //   const DetailsModal = () => {
// //     if (!showDetailsModal || !selectedTaskDetails) return null;

// //     const task = selectedTaskDetails;

// //     return (
// //       <div className="details-modal">
// //         <div
// //           className={`details-modal-content ${isOnline ? "online" : "offline"}`}
// //         >
// //           <h2
// //             className={`details-modal-title ${isOnline ? "online" : "offline"}`}
// //           >
// //             Order Details
// //           </h2>

// //           <div className="details-section">
// //             <h3
// //               className={`details-section-title ${
// //                 isOnline ? "online" : "offline"
// //               }`}
// //             >
// //               📦 Order Information
// //             </h3>
// //             <div className="details-grid">
// //               <div className="detail-item">
// //                 <span
// //                   className={`detail-label ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   Order ID
// //                 </span>
// //                 <span
// //                   className={`detail-value ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   {task.orderId}
// //                 </span>
// //               </div>
// //               <div className="detail-item">
// //                 <span
// //                   className={`detail-label ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   Status
// //                 </span>
// //                 <span
// //                   className={`detail-value ${isOnline ? "online" : "offline"}`}
// //                   style={{ color: getStatusColor(task.status) }}
// //                 >
// //                   {task.status.replace("_", " ").toUpperCase()}
// //                 </span>
// //               </div>
// //               <div className="detail-item">
// //                 <span
// //                   className={`detail-label ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   Priority
// //                 </span>
// //                 <span
// //                   className={`detail-value ${isOnline ? "online" : "offline"}`}
// //                   style={{ color: getPriorityColor(task.priority) }}
// //                 >
// //                   {task.priority}
// //                 </span>
// //               </div>
// //               <div className="detail-item">
// //                 <span
// //                   className={`detail-label ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   Order Time
// //                 </span>
// //                 <span
// //                   className={`detail-value ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   {task.orderTime || "2:30 PM"}
// //                 </span>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="details-section">
// //             <h3
// //               className={`details-section-title ${
// //                 isOnline ? "online" : "offline"
// //               }`}
// //             >
// //               👤 Customer Details
// //             </h3>
// //             <div className="details-grid">
// //               <div className="detail-item">
// //                 <span
// //                   className={`detail-label ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   Name
// //                 </span>
// //                 <span
// //                   className={`detail-value ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   {task.customerName}
// //                 </span>
// //               </div>
// //               <div className="detail-item">
// //                 <span
// //                   className={`detail-label ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   Phone
// //                 </span>
// //                 <span
// //                   className={`detail-value ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   {task.customerPhone}
// //                 </span>
// //               </div>
// //               <div className="detail-item">
// //                 <span
// //                   className={`detail-label ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   Location
// //                 </span>
// //                 <span
// //                   className={`detail-value ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   {task.deliveryLocation}
// //                 </span>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="details-section">
// //             <h3
// //               className={`details-section-title ${
// //                 isOnline ? "online" : "offline"
// //               }`}
// //             >
// //               🏥 Pharmacy Details
// //             </h3>
// //             <div className="details-grid">
// //               <div className="detail-item">
// //                 <span
// //                   className={`detail-label ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   Name
// //                 </span>
// //                 <span
// //                   className={`detail-value ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   {task.pharmacyName}
// //                 </span>
// //               </div>
// //               <div className="detail-item">
// //                 <span
// //                   className={`detail-label ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   Phone
// //                 </span>
// //                 <span
// //                   className={`detail-value ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   {task.pharmacyPhone}
// //                 </span>
// //               </div>
// //               <div className="detail-item">
// //                 <span
// //                   className={`detail-label ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   Location
// //                 </span>
// //                 <span
// //                   className={`detail-value ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   {task.pharmacyLocation}
// //                 </span>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="details-section">
// //             <h3
// //               className={`details-section-title ${
// //                 isOnline ? "online" : "offline"
// //               }`}
// //             >
// //               💊 Medicines
// //             </h3>
// //             {getMedicines(task).map((medicine, index) => (
// //               <div
// //                 key={index}
// //                 className={`medicine-detail-item ${
// //                   isOnline ? "online" : "offline"
// //                 }`}
// //               >
// //                 <h4
// //                   className={`medicine-name ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   {medicine.name}
// //                 </h4>
// //                 <p
// //                   className={`medicine-quantity ${
// //                     isOnline ? "online" : "offline"
// //                   }`}
// //                 >
// //                   Quantity: {medicine.quantity}
// //                 </p>
// //               </div>
// //             ))}
// //           </div>

// //           <div className="details-section">
// //             <h3
// //               className={`details-section-title ${
// //                 isOnline ? "online" : "offline"
// //               }`}
// //             >
// //               💰 Payment Details
// //             </h3>
// //             <div className="details-grid">
// //               <div className="detail-item">
// //                 <span
// //                   className={`detail-label ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   Amount
// //                 </span>
// //                 <span
// //                   className={`detail-value ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   {formatIndianCurrency(task.amount)}
// //                 </span>
// //               </div>
// //               <div className="detail-item">
// //                 <span
// //                   className={`detail-label ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   Tip
// //                 </span>
// //                 <span
// //                   className={`detail-value ${isOnline ? "online" : "offline"}`}
// //                   style={{ color: "#10B981" }}
// //                 >
// //                   {formatIndianCurrency(task.tip || 0)}
// //                 </span>
// //               </div>
// //               <div className="detail-item">
// //                 <span
// //                   className={`detail-label ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   Payment Method
// //                 </span>
// //                 <span
// //                   className={`detail-value ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   {task.paymentMethod || "Cash on Delivery"}
// //                 </span>
// //               </div>
// //               <div className="detail-item">
// //                 <span
// //                   className={`detail-label ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   Estimated Time
// //                 </span>
// //                 <span
// //                   className={`detail-value ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   {task.estimatedTime}
// //                 </span>
// //               </div>
// //             </div>
// //           </div>

// //           <div className="details-section">
// //             <h3
// //               className={`details-section-title ${
// //                 isOnline ? "online" : "offline"
// //               }`}
// //             >
// //               📝 Instructions
// //             </h3>
// //             <p
// //               className={`detail-value ${isOnline ? "online" : "offline"}`}
// //               style={{ fontSize: "14px" }}
// //             >
// //               {task.instructions}
// //             </p>
// //             {task.specialInstructions && (
// //               <p
// //                 className={`detail-value ${isOnline ? "online" : "offline"}`}
// //                 style={{ fontSize: "14px", color: "#009688", marginTop: "8px" }}
// //               >
// //                 <strong>Special Instructions:</strong>{" "}
// //                 {task.specialInstructions}
// //               </p>
// //             )}
// //           </div>

// //           <button
// //             className="details-close-button"
// //             onClick={handleCloseDetailsModal}
// //           >
// //             Close
// //           </button>
// //         </div>
// //       </div>
// //     );
// //   };

// //   // If offline or target achieved, show special offline dashboard
// //   if (!isOnline || incentives.dailyTargetAchieved) {
// //     return (
// //       <div
// //         className={`dashboard-main-content ${isOnline ? "online" : "offline"}`}
// //       >
// //         <audio ref={audioRef} src="/Audio.mp4" preload="auto" />

// //         <div className="dashboard-header">
// //           <div>
// //             <h1 className={`greeting-text ${isOnline ? "online" : "offline"}`}>
// //               {getCurrentGreeting()}, {getDisplayName()}
// //             </h1>
// //             <p className={`subtitle-text ${isOnline ? "online" : "offline"}`}>
// //               {incentives.dailyTargetAchieved
// //                 ? "🎉 Daily Target Achieved! You earned ₹300 bonus"
// //                 : "Ready to start delivering?"}
// //             </p>
// //           </div>
// //           <div className="dashboard-header-actions">
// //             <div
// //               className={`online-status-container ${
// //                 isOnline ? "online" : "offline"
// //               }`}
// //             >
// //               <span
// //                 className={`status-dot ${isOnline ? "online" : "offline"}`}
// //               ></span>
// //               <span
// //                 className={`status-text ${isOnline ? "online" : "offline"}`}
// //               >
// //                 Offline
// //               </span>
// //               {!incentives.dailyTargetAchieved && (
// //                 <button
// //                   className={`status-toggle-button ${
// //                     isOnline ? "online" : "offline"
// //                   }`}
// //                   onClick={handleToggleOnline}
// //                 >
// //                   Go Online
// //                 </button>
// //               )}
// //             </div>
// //             <div className={`date-display ${isOnline ? "online" : "offline"}`}>
// //               {new Date().toLocaleDateString("en-US", {
// //                 weekday: "long",
// //                 year: "numeric",
// //                 month: "long",
// //                 day: "numeric",
// //               })}
// //             </div>
// //           </div>
// //         </div>

// //         {incentives.dailyTargetAchieved && (
// //           <div className="target-achieved-message">
// //             🎉 Daily Target Achieved! You earned ₹300 bonus
// //           </div>
// //         )}

// //         {/* Special Incentives Section */}
// //         <div
// //           className={`special-incentives-section ${
// //             isOnline ? "online" : "offline"
// //           }`}
// //         >
// //           <h2
// //             className={`section-title ${isOnline ? "online" : "offline"}`}
// //             style={{ color: "#E0F2F1", marginBottom: "20px" }}
// //           >
// //             Special Incentives & Offers
// //           </h2>

// //           <div
// //             className={`special-incentive-card ${
// //               isOnline ? "online" : "offline"
// //             }`}
// //           >
// //             <h3 className="special-incentive-title">🎯 Daily Target Bonus</h3>
// //             <p className="special-incentive-desc">
// //               Complete 12 orders daily to earn ₹300 bonus
// //             </p>
// //             <div className={`progress-bar ${isOnline ? "online" : "offline"}`}>
// //               <div
// //                 className="progress-fill"
// //                 style={{
// //                   width: `${(incentives.dailyOrdersCompleted / 12) * 100}%`,
// //                 }}
// //               ></div>
// //             </div>
// //             <p className="special-incentive-desc" style={{ marginTop: "8px" }}>
// //               {incentives.dailyTargetAchieved
// //                 ? "🎉 Daily Target Achieved! You earned ₹300 bonus"
// //                 : `Complete ${
// //                     12 - incentives.dailyOrdersCompleted
// //                   } more orders to reach daily target`}
// //             </p>
// //           </div>

// //           <div
// //             className={`special-incentive-card ${
// //               isOnline ? "online" : "offline"
// //             }`}
// //           >
// //             <h3 className="special-incentive-title">👥 Referral Bonus</h3>
// //             <p className="special-incentive-desc">
// //               Refer friends and earn ₹200 per referral
// //             </p>
// //             <p
// //               className="special-incentive-desc"
// //               style={{ marginTop: "8px", fontWeight: "600" }}
// //             >
// //               Available: {formatIndianCurrency(incentives.referralBonus)}
// //             </p>
// //           </div>

// //           <div
// //             className={`special-incentive-card ${
// //               isOnline ? "online" : "offline"
// //             }`}
// //           >
// //             <h3 className="special-incentive-title">🎁 Joining Bonus</h3>
// //             <p className="special-incentive-desc">
// //               Welcome! Complete your first 5 orders to get ₹500
// //             </p>
// //             <p
// //               className="special-incentive-desc"
// //               style={{ marginTop: "8px", fontWeight: "600" }}
// //             >
// //               Available: {formatIndianCurrency(incentives.joiningBonus)}
// //             </p>
// //           </div>

// //           <div
// //             className={`special-incentive-card ${
// //               isOnline ? "online" : "offline"
// //             }`}
// //           >
// //             <h3 className="special-incentive-title">💝 Customer Tips</h3>
// //             <p className="special-incentive-desc">
// //               Customers can tip you for excellent service
// //             </p>
// //             <p
// //               className="special-incentive-desc"
// //               style={{ marginTop: "8px", fontWeight: "600" }}
// //             >
// //               Earned: {formatIndianCurrency(incentives.customerTips)}
// //             </p>
// //           </div>

// //           {!incentives.dailyTargetAchieved && (
// //             <button
// //               className="go-online-large-button"
// //               onClick={handleToggleOnline}
// //             >
// //               Go Online
// //             </button>
// //           )}
// //         </div>

// //         <button
// //           className="ai-chat-button"
// //           onClick={safeToggleAIChat}
// //           title="AI Assistant"
// //         >
// //           💬
// //         </button>
// //       </div>
// //     );
// //   }

// //   // Online mode - show full dashboard
// //   return (
// //     <div
// //       className={`dashboard-main-content ${isOnline ? "online" : "offline"}`}
// //     >
// //       <ProofModal />
// //       <SuccessModal />
// //       <DetailsModal />

// //       <div className="dashboard-header">
// //         <div>
// //           <h1 className={`greeting-text ${isOnline ? "online" : "offline"}`}>
// //             {getCurrentGreeting()}, {getDisplayName()}
// //           </h1>
// //           <p className={`subtitle-text ${isOnline ? "online" : "offline"}`}>
// //             Here's your delivery overview for today
// //           </p>
// //         </div>
// //         <div className="dashboard-header-actions">
// //           <div
// //             className={`online-status-container ${
// //               isOnline ? "online" : "offline"
// //             }`}
// //           >
// //             <span
// //               className={`status-dot ${isOnline ? "online" : "offline"}`}
// //             ></span>
// //             <span className={`status-text ${isOnline ? "online" : "offline"}`}>
// //               Online
// //             </span>
// //             <button
// //               className={`status-toggle-button ${
// //                 isOnline ? "online" : "offline"
// //               }`}
// //               onClick={handleToggleOnline}
// //             >
// //               Go Offline
// //             </button>
// //           </div>
// //           <div className={`date-display ${isOnline ? "online" : "offline"}`}>
// //             {new Date().toLocaleDateString("en-US", {
// //               weekday: "long",
// //               year: "numeric",
// //               month: "long",
// //               day: "numeric",
// //             })}
// //           </div>
// //           <div className="dashboard-action-buttons">
// //             <button
// //               className={`notification-button ${
// //                 isOnline ? "online" : "offline"
// //               }`}
// //               onClick={safeToggleNotifications}
// //             >
// //               🔔
// //               {safeGetUnreadCount() > 0 && (
// //                 <span className="notification-badge">
// //                   {safeGetUnreadCount()}
// //                 </span>
// //               )}
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       {/* Incentives Section */}
// //       <div className={`incentives-section ${isOnline ? "online" : "offline"}`}>
// //         <div className="incentives-header">
// //           <h2 className={`section-title ${isOnline ? "online" : "offline"}`}>
// //             Your Earnings & Incentives
// //           </h2>
// //         </div>
// //         <div className="incentives-grid">
// //           <div className={`incentive-card ${isOnline ? "online" : "offline"}`}>
// //             <h3
// //               className={`incentive-amount ${isOnline ? "online" : "offline"}`}
// //             >
// //               {formatIndianCurrency(incentives.today)}
// //             </h3>
// //             <p className={`incentive-label ${isOnline ? "online" : "offline"}`}>
// //               Today's Earnings
// //             </p>
// //             {incentives.customerTips > 0 && (
// //               <p
// //                 className={`incentive-label ${isOnline ? "online" : "offline"}`}
// //                 style={{ fontSize: "12px", marginTop: "4px" }}
// //               >
// //                 Includes {formatIndianCurrency(incentives.customerTips)} tips
// //               </p>
// //             )}
// //           </div>
// //           <div className={`incentive-card ${isOnline ? "online" : "offline"}`}>
// //             <h3
// //               className={`incentive-amount ${isOnline ? "online" : "offline"}`}
// //             >
// //               {formatIndianCurrency(incentives.weekly)}
// //             </h3>
// //             <p className={`incentive-label ${isOnline ? "online" : "offline"}`}>
// //               This Week
// //             </p>
// //           </div>
// //           <div className={`incentive-card ${isOnline ? "online" : "offline"}`}>
// //             <h3
// //               className={`incentive-amount ${isOnline ? "online" : "offline"}`}
// //             >
// //               {formatIndianCurrency(incentives.monthly)}
// //             </h3>
// //             <p className={`incentive-label ${isOnline ? "online" : "offline"}`}>
// //               This Month
// //             </p>
// //           </div>
// //           <div className={`incentive-card ${isOnline ? "online" : "offline"}`}>
// //             <h3
// //               className={`incentive-amount ${isOnline ? "online" : "offline"}`}
// //             >
// //               {incentives.completedDeliveries}
// //             </h3>
// //             <p className={`incentive-label ${isOnline ? "online" : "offline"}`}>
// //               Completed Deliveries
// //             </p>
// //             {incentives.bonusEligible && (
// //               <span className="bonus-badge">Bonus Eligible</span>
// //             )}
// //           </div>
// //         </div>
// //       </div>

// //       {/* Real-time Stats Grid */}
// //       <div className="stats-grid">
// //         <div
// //           className={`stat-card ${isOnline ? "online" : "offline"} ${
// //             selectedStat === "totalToday" ? "active" : ""
// //           }`}
// //           onClick={() => handleStatClick("totalToday")}
// //         >
// //           <div className={`stat-icon ${isOnline ? "online" : "offline"}`}>
// //             📦
// //           </div>
// //           <div className="stat-content">
// //             <h3 className={`stat-number ${isOnline ? "online" : "offline"}`}>
// //               {completedOrders.length + acceptedOrders.length}
// //             </h3>
// //             <p className={`stat-label ${isOnline ? "online" : "offline"}`}>
// //               Total Deliveries Today
// //             </p>
// //           </div>
// //         </div>

// //         <div
// //           className={`stat-card ${isOnline ? "online" : "offline"} ${
// //             selectedStat === "pending" ? "active" : ""
// //           }`}
// //           onClick={() => handleStatClick("pending")}
// //         >
// //           <div className={`stat-icon ${isOnline ? "online" : "offline"}`}>
// //             ⏳
// //           </div>
// //           <div className="stat-content">
// //             <h3 className={`stat-number ${isOnline ? "online" : "offline"}`}>
// //               {availableOrders.length}
// //             </h3>
// //             <p className={`stat-label ${isOnline ? "online" : "offline"}`}>
// //               Pending Acceptance
// //             </p>
// //           </div>
// //         </div>

// //         <div
// //           className={`stat-card ${isOnline ? "online" : "offline"} ${
// //             selectedStat === "inProgress" ? "active" : ""
// //           }`}
// //           onClick={() => handleStatClick("inProgress")}
// //         >
// //           <div className={`stat-icon ${isOnline ? "online" : "offline"}`}>
// //             🚚
// //           </div>
// //           <div className="stat-content">
// //             <h3 className={`stat-number ${isOnline ? "online" : "offline"}`}>
// //               {acceptedOrders.filter((o) => o.status !== "assigned").length}
// //             </h3>
// //             <p className={`stat-label ${isOnline ? "online" : "offline"}`}>
// //               In Progress
// //             </p>
// //           </div>
// //         </div>

// //         <div
// //           className={`stat-card ${isOnline ? "online" : "offline"} ${
// //             selectedStat === "completed" ? "active" : ""
// //           }`}
// //           onClick={() => handleStatClick("completed")}
// //         >
// //           <div className={`stat-icon ${isOnline ? "online" : "offline"}`}>
// //             ✅
// //           </div>
// //           <div className="stat-content">
// //             <h3 className={`stat-number ${isOnline ? "online" : "offline"}`}>
// //               {completedOrders.length}
// //             </h3>
// //             <p className={`stat-label ${isOnline ? "online" : "offline"}`}>
// //               Delivered
// //             </p>
// //           </div>
// //         </div>

// //         <div
// //           className={`stat-card ${isOnline ? "online" : "offline"} ${
// //             selectedStat === "todayEarnings" ? "active" : ""
// //           }`}
// //           onClick={() => handleStatClick("todayEarnings")}
// //         >
// //           <div className={`stat-icon ${isOnline ? "online" : "offline"}`}>
// //             💰
// //           </div>
// //           <div className="stat-content">
// //             <h3 className={`stat-number ${isOnline ? "online" : "offline"}`}>
// //               {formatIndianCurrency(incentives.today)}
// //             </h3>
// //             <p className={`stat-label ${isOnline ? "online" : "offline"}`}>
// //               Today's Earnings
// //             </p>
// //           </div>
// //         </div>

// //         <div
// //           className={`stat-card ${isOnline ? "online" : "offline"} ${
// //             selectedStat === "cancelled" ? "active" : ""
// //           }`}
// //           onClick={() => handleStatClick("cancelled")}
// //         >
// //           <div className={`stat-icon ${isOnline ? "online" : "offline"}`}>
// //             ❌
// //           </div>
// //           <div className="stat-content">
// //             <h3 className={`stat-number ${isOnline ? "online" : "offline"}`}>
// //               0
// //             </h3>
// //             <p className={`stat-label ${isOnline ? "online" : "offline"}`}>
// //               Cancelled Orders
// //             </p>
// //           </div>
// //         </div>
// //       </div>

// //       <div className="content-grid">
// //         <div className={`section ${isOnline ? "online" : "offline"}`}>
// //           <div className="section-header">
// //             <h2 className={`section-title ${isOnline ? "online" : "offline"}`}>
// //               {acceptedOrders.length > 0
// //                 ? "Current Deliveries"
// //                 : "Available Deliveries"}
// //             </h2>
// //             {completedOrders.length > 0 && (
// //               <span className="view-all-link" onClick={handleViewAllTasks}>
// //                 View History
// //               </span>
// //             )}
// //           </div>

// //           {/* Delivery Progress Tracker */}
// //           {acceptedOrders.length > 0 && (
// //             <div
// //               className={`delivery-progress ${isOnline ? "online" : "offline"}`}
// //             >
// //               {getProgressSteps()}
// //             </div>
// //           )}

// //           <div className="tasks-list">
// //             {acceptedOrders.length > 0
// //               ? acceptedOrders.map((task) => (
// //                   <div
// //                     key={task.id}
// //                     className={`task-card ${isOnline ? "online" : "offline"}`}
// //                   >
// //                     <div className="task-header">
// //                       <div className="task-info">
// //                         <h4
// //                           className={`order-id ${
// //                             isOnline ? "online" : "offline"
// //                           }`}
// //                         >
// //                           {task.orderId}
// //                         </h4>
// //                         <p
// //                           className={`customer-name ${
// //                             isOnline ? "online" : "offline"
// //                           }`}
// //                         >
// //                           {task.customerName}
// //                         </p>
// //                       </div>
// //                       <div className="task-status">
// //                         <span
// //                           className="status-badge"
// //                           style={{
// //                             backgroundColor: getStatusColor(task.status),
// //                           }}
// //                         >
// //                           {task.status.replace("_", " ").toUpperCase()}
// //                         </span>
// //                         <span
// //                           className="priority-badge"
// //                           style={{ color: getPriorityColor(task.priority) }}
// //                         >
// //                           {task.priority}
// //                         </span>
// //                       </div>
// //                     </div>

// //                     <div className="task-details">
// //                       {/* Pharmacy Location */}
// //                       <div className="location-row">
// //                         <span
// //                           className={`location-label ${
// //                             isOnline ? "online" : "offline"
// //                           }`}
// //                         >
// //                           🏥 Pharmacy:
// //                         </span>
// //                         <span
// //                           className={`location-text ${
// //                             isOnline ? "online" : "offline"
// //                           }`}
// //                         >
// //                           {task.pharmacyLocation}
// //                           <div className="contact-info">
// //                             <button
// //                               className={`contact-button ${
// //                                 isOnline ? "online" : "offline"
// //                               }`}
// //                               onClick={() =>
// //                                 handleCallPharmacy(task.pharmacyPhone)
// //                               }
// //                             >
// //                               📞 {task.pharmacyPhone}
// //                             </button>
// //                             <button
// //                               className="direction-button"
// //                               onClick={() =>
// //                                 handleGetDirections(task.pharmacyLocation)
// //                               }
// //                             >
// //                               🗺️ Get Directions
// //                             </button>
// //                           </div>
// //                         </span>
// //                       </div>

// //                       {/* Delivery Location */}
// //                       <div className="location-row">
// //                         <span
// //                           className={`location-label ${
// //                             isOnline ? "online" : "offline"
// //                           }`}
// //                         >
// //                           🏠 Delivery:
// //                         </span>
// //                         <span
// //                           className={`location-text ${
// //                             isOnline ? "online" : "offline"
// //                           }`}
// //                         >
// //                           {task.deliveryLocation}
// //                           <div className="contact-info">
// //                             <button
// //                               className={`contact-button ${
// //                                 isOnline ? "online" : "offline"
// //                               }`}
// //                               onClick={() =>
// //                                 handleCallCustomer(task.customerPhone)
// //                               }
// //                             >
// //                               📞 {task.customerPhone}
// //                             </button>
// //                             <button
// //                               className="customer-direction-button"
// //                               onClick={() =>
// //                                 handleGetDirections(task.deliveryLocation, true)
// //                               }
// //                             >
// //                               🗺️ Customer Directions
// //                             </button>
// //                           </div>
// //                         </span>
// //                       </div>
// //                     </div>

// //                     <div className="task-meta">
// //                       <span
// //                         className={`meta-item ${
// //                           isOnline ? "online" : "offline"
// //                         }`}
// //                       >
// //                         🕒 {task.estimatedTime}
// //                       </span>
// //                       <span
// //                         className={`meta-item ${
// //                           isOnline ? "online" : "offline"
// //                         }`}
// //                       >
// //                         📏 {task.distance}
// //                       </span>
// //                       <span
// //                         className={`meta-item ${
// //                           isOnline ? "online" : "offline"
// //                         }`}
// //                       >
// //                         💰 {formatIndianCurrency(task.amount)}
// //                       </span>
// //                       {task.tip > 0 && (
// //                         <span
// //                           className={`meta-item ${
// //                             isOnline ? "online" : "offline"
// //                           }`}
// //                           style={{ color: "#10B981", fontWeight: "600" }}
// //                         >
// //                           💝 Tip: {formatIndianCurrency(task.tip)}
// //                         </span>
// //                       )}
// //                     </div>

// //                     <div className="task-actions">
// //                       {task.status === "assigned" && (
// //                         <>
// //                           <button
// //                             className="primary-button"
// //                             onClick={() => handleReachedPharmacy(task)}
// //                           >
// //                             🏥 I've Reached Pharmacy
// //                           </button>
// //                           <button
// //                             className="direction-button"
// //                             onClick={() =>
// //                               handleGetDirections(task.pharmacyLocation)
// //                             }
// //                           >
// //                             🗺️ Directions to Pharmacy
// //                           </button>
// //                         </>
// //                       )}

// //                       {task.status === "pickup_reached" && (
// //                         <button
// //                           className="success-button"
// //                           onClick={() => handlePickupCompleted(task)}
// //                         >
// //                           ✅ Pickup Completed
// //                         </button>
// //                       )}

// //                       {task.status === "pickup_completed" && (
// //                         <>
// //                           <button
// //                             className="primary-button"
// //                             onClick={() => handleReachedCustomer(task)}
// //                           >
// //                             🏠 I've Reached Customer
// //                           </button>
// //                           <button
// //                             className="customer-direction-button"
// //                             onClick={() =>
// //                               handleGetDirections(task.deliveryLocation, true)
// //                             }
// //                             style={{ padding: "10px 16px", fontSize: "14px" }}
// //                           >
// //                             🗺️ Customer Directions
// //                           </button>
// //                         </>
// //                       )}

// //                       {task.status === "delivery_reached" && (
// //                         <button
// //                           className="success-button"
// //                           onClick={() => handleOpenProofModal(task)}
// //                         >
// //                           📸 Submit Proof of Delivery
// //                         </button>
// //                       )}

// //                       <button
// //                         className="cancel-order-button"
// //                         onClick={() => handleCancelOrder(task)}
// //                       >
// //                         ❌ Cancel Order
// //                       </button>

// //                       <button
// //                         className="secondary-button"
// //                         onClick={() => handleViewDetails(task)}
// //                       >
// //                         View Details
// //                       </button>
// //                     </div>
// //                   </div>
// //                 ))
// //               : availableOrders.map((task) => (
// //                   <div
// //                     key={task.id}
// //                     className={`task-card ${isOnline ? "online" : "offline"}`}
// //                   >
// //                     <div className="task-header">
// //                       <div className="task-info">
// //                         <h4
// //                           className={`order-id ${
// //                             isOnline ? "online" : "offline"
// //                           }`}
// //                         >
// //                           {task.orderId}
// //                         </h4>
// //                         <p
// //                           className={`customer-name ${
// //                             isOnline ? "online" : "offline"
// //                           }`}
// //                         >
// //                           {task.customerName}
// //                         </p>
// //                       </div>
// //                       <div className="task-status">
// //                         <span
// //                           className="status-badge"
// //                           style={{
// //                             backgroundColor: getStatusColor(task.status),
// //                           }}
// //                         >
// //                           {task.status}
// //                         </span>
// //                         <span
// //                           className="priority-badge"
// //                           style={{ color: getPriorityColor(task.priority) }}
// //                         >
// //                           {task.priority}
// //                         </span>
// //                       </div>
// //                     </div>

// //                     <div className="task-details">
// //                       <div className="location-row">
// //                         <span
// //                           className={`location-label ${
// //                             isOnline ? "online" : "offline"
// //                           }`}
// //                         >
// //                           🏥 Pharmacy:
// //                         </span>
// //                         <span
// //                           className={`location-text ${
// //                             isOnline ? "online" : "offline"
// //                           }`}
// //                         >
// //                           {task.pharmacyLocation}
// //                         </span>
// //                       </div>
// //                       <div className="location-row">
// //                         <span
// //                           className={`location-label ${
// //                             isOnline ? "online" : "offline"
// //                           }`}
// //                         >
// //                           🏠 Delivery:
// //                         </span>
// //                         <span
// //                           className={`location-text ${
// //                             isOnline ? "online" : "offline"
// //                           }`}
// //                         >
// //                           {task.deliveryLocation}
// //                           <button
// //                             className="customer-direction-button"
// //                             onClick={() =>
// //                               handleGetDirections(task.deliveryLocation, true)
// //                             }
// //                           >
// //                             🗺️ Customer Directions
// //                           </button>
// //                         </span>
// //                       </div>
// //                     </div>

// //                     <div className="task-meta">
// //                       <span
// //                         className={`meta-item ${
// //                           isOnline ? "online" : "offline"
// //                         }`}
// //                       >
// //                         🕒 {task.estimatedTime}
// //                       </span>
// //                       <span
// //                         className={`meta-item ${
// //                           isOnline ? "online" : "offline"
// //                         }`}
// //                       >
// //                         📏 {task.distance}
// //                       </span>
// //                       <span
// //                         className={`meta-item ${
// //                           isOnline ? "online" : "offline"
// //                         }`}
// //                       >
// //                         💰 {formatIndianCurrency(task.amount)}
// //                       </span>
// //                       {task.tip > 0 && (
// //                         <span
// //                           className={`meta-item ${
// //                             isOnline ? "online" : "offline"
// //                           }`}
// //                           style={{ color: "#10B981", fontWeight: "600" }}
// //                         >
// //                           💝 Potential Tip: {formatIndianCurrency(task.tip)}
// //                         </span>
// //                       )}
// //                     </div>

// //                     <div className="task-actions">
// //                       <button
// //                         className="accept-button"
// //                         onClick={() => handleAcceptOrder(task)}
// //                       >
// //                         ✅ Accept Delivery
// //                       </button>
// //                       <button
// //                         className="cancel-order-button"
// //                         onClick={() => handleCancelAvailableOrder(task)}
// //                       >
// //                         ❌ Cancel Order
// //                       </button>
// //                       <button
// //                         className="secondary-button"
// //                         onClick={() => handleViewDetails(task)}
// //                       >
// //                         View Details
// //                       </button>
// //                     </div>
// //                   </div>
// //                 ))}
// //           </div>
// //         </div>

// //         <div className="sidebar-section">
// //           {/* Live Route Tracker */}
// //           {isOnline && acceptedOrders.length > 0 && (
// //             <LiveRouteTracker
// //               deliveryData={deliveryData}
// //               isOnline={isOnline}
// //               currentOrder={acceptedOrders[0]}
// //               currentStep={currentStep}
// //             />
// //           )}

// //           {isOnline && acceptedOrders.length === 0 && (
// //             <LiveRouteTracker
// //               deliveryData={deliveryData}
// //               isOnline={isOnline}
// //               currentOrder={null}
// //               currentStep={currentStep}
// //             />
// //           )}

// //           {/* Delivery History Section */}
// //           {completedOrders.length > 0 && (
// //             <div
// //               className={`delivery-history-section ${
// //                 isOnline ? "online" : "offline"
// //               }`}
// //             >
// //               <div className="section-header">
// //                 <h2
// //                   className={`section-title ${isOnline ? "online" : "offline"}`}
// //                 >
// //                   Recent Deliveries
// //                 </h2>
// //                 <span className="view-all-link" onClick={handleViewAllTasks}>
// //                   View All
// //                 </span>
// //               </div>
// //               <div className="tasks-list">
// //                 {completedOrders
// //                   .slice(-3)
// //                   .reverse()
// //                   .map((order, index) => (
// //                     <div
// //                       key={order.id}
// //                       className={`history-item ${
// //                         isOnline ? "online" : "offline"
// //                       }`}
// //                     >
// //                       <h4
// //                         className={`history-order-id ${
// //                           isOnline ? "online" : "offline"
// //                         }`}
// //                       >
// //                         {order.orderId}
// //                       </h4>
// //                       <p
// //                         className={`history-details ${
// //                           isOnline ? "online" : "offline"
// //                         }`}
// //                       >
// //                         {order.customerName} •{" "}
// //                         {formatIndianCurrency(order.amount)}
// //                         {order.tip > 0 &&
// //                           ` + ${formatIndianCurrency(order.tip)} tip`}
// //                       </p>
// //                       {order.proofImage && (
// //                         <p
// //                           style={{
// //                             fontSize: "11px",
// //                             color: "#10B981",
// //                             margin: "4px 0",
// //                           }}
// //                         >
// //                           📸 Proof submitted
// //                         </p>
// //                       )}
// //                       <p
// //                         className={`history-time ${
// //                           isOnline ? "online" : "offline"
// //                         }`}
// //                       >
// //                         Delivered:{" "}
// //                         {order.deliveredAt?.toLocaleTimeString() || "Just now"}
// //                       </p>
// //                     </div>
// //                   ))}
// //               </div>
// //             </div>
// //           )}
// //         </div>
// //       </div>

// //       {/* AI Chat Button */}
// //       <button
// //         className="ai-chat-button"
// //         onClick={safeToggleAIChat}
// //         title="AI Assistant"
// //       >
// //         💬
// //       </button>
// //     </div>
// //   );
// // };

// // // Add default props to prevent errors
// // Dashboard.defaultProps = {
// //   profileData: {},
// //   deliveryData: {},
// //   isOnline: false,
// //   toggleOnlineStatus: () => {},
// //   setSelectedTask: () => {},
// //   toggleNotifications: () => {},
// //   getUnreadCount: () => 0,
// //   toggleAIChat: () => {},
// //   setActivePage: () => {},
// // };

// // export default Dashboard;

import React, { useState, useEffect, useRef } from "react";
import LiveRouteTracker from "./LiveRouteTracker";
import "./Dashboard.css";

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
  const [isOnline, setIsOnline] = useState(false); // Default offline
  const [acceptedOrders, setAcceptedOrders] = useState([]);
  const [completedOrders, setCompletedOrders] = useState([]);
  const [availableOrders, setAvailableOrders] = useState([]);
  const [currentStep, setCurrentStep] = useState("available");
  const [incentives, setIncentives] = useState({
    today: 0,
    weekly: 0,
    monthly: 0,
    completedDeliveries: 0,
    bonusEligible: false,
    customerTips: 0,
    joiningBonus: 0,
    referralBonus: 0,
    dailyTarget: 300,
    dailyOrdersCompleted: 0,
    dailyTargetAchieved: false,
  });
  const [showProofModal, setShowProofModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [currentDeliveryForProof, setCurrentDeliveryForProof] = useState(null);
  const [selectedTaskDetails, setSelectedTaskDetails] = useState(null);
  const [proofImage, setProofImage] = useState(null);
  const [proofSignature, setProofSignature] = useState(null);
  const [customerOTP, setCustomerOTP] = useState("");
  const [isDrawing, setIsDrawing] = useState(false);
  const [lastDeliveryDetails, setLastDeliveryDetails] = useState(null);

  const audioRef = useRef(null);
  const notificationIntervalRef = useRef(null);
  const proofImageInputRef = useRef(null);
  const signatureCanvasRef = useRef(null);
  const otpInputRef = useRef(null);

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

  // Sync with prop isOnline - but don't override the default offline state
  useEffect(() => {
    if (propIsOnline !== undefined && propIsOnline !== isOnline) {
      setIsOnline(propIsOnline);
    }
  }, [propIsOnline]);

  const getCurrentGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 18) return "Good Afternoon";
    return "Good Evening";
  };

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

  // Initialize available orders when going online
  useEffect(() => {
    if (
      isOnline &&
      availableOrders.length === 0 &&
      acceptedOrders.length === 0
    ) {
      // Only initialize orders when online and no existing orders
      const initialOrders = [
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
      setAvailableOrders(initialOrders);
    } else if (!isOnline) {
      // Clear orders when going offline
      setAvailableOrders([]);
      setAcceptedOrders([]);
    }
  }, [isOnline]);

  // Simulate new pharmacy orders for Visakhapatnam
  useEffect(() => {
    if (
      !isOnline ||
      acceptedOrders.length > 0 ||
      availableOrders.length > 0 ||
      incentives.dailyTargetAchieved
    )
      return;

    const orderInterval = setInterval(() => {
      setAvailableOrders((prev) => {
        if (prev.length >= 1) return prev;

        const visakhapatnamPharmacies = [
          {
            name: "Apollo Pharmacy",
            phone: "+91 98765 43211",
            area: "MVP Colony",
          },
          {
            name: "MedPlus Pharmacy",
            phone: "+91 98765 43213",
            area: "Dwarakanagar",
          },
          {
            name: "Fortis Pharmacy",
            phone: "+91 98765 43215",
            area: "Siripuram",
          },
          {
            name: "Max Healthcare Pharmacy",
            phone: "+91 98765 43217",
            area: "Gajuwaka",
          },
          {
            name: "City Pharmacy",
            phone: "+91 98765 43219",
            area: "Akkayyapalem",
          },
        ];

        const visakhapatnamAreas = [
          "MVP Colony",
          "Dwarakanagar",
          "Siripuram",
          "Gajuwaka",
          "Akkayyapalem",
          "Seethammadhara",
          "Madhurawada",
          "Pendurthi",
          "Anakapalle",
          "Bheemili",
        ];

        const pharmacy =
          visakhapatnamPharmacies[
            Math.floor(Math.random() * visakhapatnamPharmacies.length)
          ];
        const deliveryArea = visakhapatnamAreas.filter(
          (a) => a !== pharmacy.area
        )[Math.floor(Math.random() * (visakhapatnamAreas.length - 1))];

        const tipAmount =
          Math.random() > 0.3 ? Math.floor(Math.random() * 30) + 5 : 0;
        const medicineList = [
          [
            { name: "Paracetamol 500mg", quantity: "1 strip" },
            { name: "Cetirizine 10mg", quantity: "1 strip" },
          ],
          [
            { name: "Amoxicillin 500mg", quantity: "10 capsules" },
            { name: "Vitamin D3", quantity: "1 bottle" },
          ],
          [
            { name: "Ibuprofen 400mg", quantity: "1 strip" },
            { name: "ORS Packets", quantity: "5 packets" },
          ],
          [
            { name: "Azithromycin 500mg", quantity: "3 tablets" },
            { name: "Cough Syrup", quantity: "1 bottle" },
          ],
        ];

        const newOrder = {
          id: `ORD${Date.now()}`,
          orderId: `MED${Date.now().toString().slice(-4)}`,
          customerName: [
            "Amit Sharma",
            "Neha Gupta",
            "Rohit Verma",
            "Sneha Patel",
          ][Math.floor(Math.random() * 4)],
          customerPhone: `+91 9${Math.floor(
            10000000 + Math.random() * 90000000
          )}`,
          pharmacyName: pharmacy.name,
          pharmacyPhone: pharmacy.phone,
          pharmacyLocation: `${pharmacy.name}, ${pharmacy.area}, Visakhapatnam`,
          deliveryLocation: `${deliveryArea}, Visakhapatnam`,
          estimatedTime: `${20 + Math.floor(Math.random() * 20)} mins`,
          distance: `${(2 + Math.random() * 4).toFixed(1)} km`,
          amount: 30 + Math.floor(Math.random() * 50),
          tip: tipAmount,
          status: "pending",
          priority: ["Low", "Medium", "High"][Math.floor(Math.random() * 3)],
          instructions:
            "Handle with care. Keep medicines in original packaging.",
          customerOTP: Math.floor(1000 + Math.random() * 9000).toString(),
          medicines:
            medicineList[Math.floor(Math.random() * medicineList.length)],
          specialInstructions: [
            "Call before delivery",
            "Leave at doorstep",
            "Ring bell twice",
          ][Math.floor(Math.random() * 3)],
          paymentMethod: ["Cash on Delivery", "Online Paid"][
            Math.floor(Math.random() * 2)
          ],
          orderTime: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };

        return [newOrder];
      });
    }, 30000);

    return () => clearInterval(orderInterval);
  }, [
    isOnline,
    acceptedOrders.length,
    availableOrders.length,
    incentives.dailyTargetAchieved,
  ]);

  // Notification sound system
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

  // Initialize signature canvas
  useEffect(() => {
    if (signatureCanvasRef.current && showProofModal) {
      const canvas = signatureCanvasRef.current;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.strokeStyle = "#124441";
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
    }
  }, [showProofModal]);

  // Focus OTP input when proof modal opens
  useEffect(() => {
    if (showProofModal && otpInputRef.current) {
      setTimeout(() => {
        otpInputRef.current.focus();
      }, 100);
    }
  }, [showProofModal]);

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
      // Initialize orders when going online
      const initialOrders = [
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
      setAvailableOrders(initialOrders);
    } else {
      setAcceptedOrders([]);
      setAvailableOrders([]);
      setCurrentStep("available");
    }

    safeToggleOnlineStatus(newOnlineStatus);
  };

  const handleAcceptOrder = (order) => {
    if (notificationIntervalRef.current) {
      clearInterval(notificationIntervalRef.current);
    }

    const acceptedOrder = {
      ...order,
      status: "assigned",
      acceptedAt: new Date(),
    };

    setAcceptedOrders([acceptedOrder]);
    setAvailableOrders([]);
    setCurrentStep("accepted");

    // REMOVED: Don't add amount when order is accepted
    // Amount should only be added when delivery is completed
  };

  const handleCancelAvailableOrder = (order) => {
    setAvailableOrders((prev) => prev.filter((o) => o.id !== order.id));
  };

  const handleReachedPharmacy = (order) => {
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

  const handleProofImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProofImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSignatureStart = (e) => {
    e.preventDefault();
    const canvas = signatureCanvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");

    const x = e.type.includes("mouse")
      ? e.clientX - rect.left
      : e.touches[0].clientX - rect.left;
    const y = e.type.includes("mouse")
      ? e.clientY - rect.top
      : e.touches[0].clientY - rect.top;

    ctx.beginPath();
    ctx.moveTo(x, y);
    setIsDrawing(true);
  };

  const handleSignatureMove = (e) => {
    if (!isDrawing) return;
    e.preventDefault();

    const canvas = signatureCanvasRef.current;
    const rect = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");

    const x = e.type.includes("mouse")
      ? e.clientX - rect.left
      : e.touches[0].clientX - rect.left;
    const y = e.type.includes("mouse")
      ? e.clientY - rect.top
      : e.touches[0].clientY - rect.top;

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const handleSignatureEnd = () => {
    setIsDrawing(false);
    const canvas = signatureCanvasRef.current;
    setProofSignature(canvas.toDataURL());
  };

  const handleClearSignature = () => {
    const canvas = signatureCanvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "#124441";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    setProofSignature(null);
  };

  const handleOTPChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 4) {
      setCustomerOTP(value);
    }
  };

  const handleSubmitProof = () => {
    if (!customerOTP || customerOTP.length !== 4) {
      alert("Please enter valid 4-digit OTP");
      return;
    }

    if (!proofImage && !proofSignature) {
      alert("Please provide either photo proof or signature");
      return;
    }

    const deliveredOrder = {
      ...currentDeliveryForProof,
      status: "delivery_completed",
      deliveredAt: new Date(),
      proofImage,
      proofSignature,
      proofOTP: customerOTP,
    };

    setCompletedOrders((prev) => [...prev, deliveredOrder]);
    setAcceptedOrders([]);
    setCurrentStep("available");

    // ADD amount only when delivery is completed
    setIncentives((prev) => ({
      ...prev,
      completedDeliveries: prev.completedDeliveries + 1,
      dailyOrdersCompleted: prev.dailyOrdersCompleted + 1,
      weekly: prev.weekly + currentDeliveryForProof.amount,
      monthly: prev.monthly + currentDeliveryForProof.amount,
      today:
        prev.today +
        currentDeliveryForProof.amount +
        (currentDeliveryForProof.tip || 0),
      customerTips: prev.customerTips + (currentDeliveryForProof.tip || 0),
    }));

    // Store last delivery details for success modal
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
    setProofImage(null);
    setProofSignature(null);
    setCustomerOTP("");
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
    setLastDeliveryDetails(null);
  };

  const handleCancelOrder = (order) => {
    setAcceptedOrders((prev) => prev.filter((o) => o.id !== order.id));
    setAvailableOrders((prev) => [...prev, { ...order, status: "pending" }]);
    setCurrentStep("available");
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

  // Update the progress steps
  const getProgressSteps = () => {
    const steps = [
      { label: "Order Accepted", key: "accepted" },
      { label: "Reached Pharmacy", key: "pickup_reached" },
      { label: "Pickup Completed", key: "pickup_completed" },
      { label: "Reached Customer", key: "delivery_reached" },
      { label: "Proof Submitted", key: "proof_submitted" },
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

  // Proof of Delivery Modal
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
            📦 Proof of Delivery
          </h2>

          <div className="proof-section">
            <label className={`proof-label ${isOnline ? "online" : "offline"}`}>
              🔢 Enter Customer OTP
            </label>
            <input
              ref={otpInputRef}
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              placeholder="Enter 4-digit OTP shared by customer"
              value={customerOTP}
              onChange={handleOTPChange}
              maxLength={4}
              className={`proof-input ${isOnline ? "online" : "offline"}`}
            />
            <p
              style={{
                fontSize: "12px",
                color: isOnline ? "#4F6F6B" : "#E0F2F1B0",
                marginTop: "-10px",
                marginBottom: "15px",
              }}
            >
              Use mock OTP: {currentDeliveryForProof?.customerOTP}
            </p>
          </div>

          <div className="proof-section">
            <label className={`proof-label ${isOnline ? "online" : "offline"}`}>
              📸 Upload Delivery Photo
            </label>
            <div
              className={`proof-image-upload ${
                isOnline ? "online" : "offline"
              }`}
              onClick={() => proofImageInputRef.current.click()}
            >
              {proofImage ? (
                <img
                  src={proofImage}
                  alt="Proof"
                  className="proof-image-preview"
                />
              ) : (
                <>
                  <div style={{ fontSize: "48px", marginBottom: "10px" }}>
                    📷
                  </div>
                  <p
                    style={{
                      color: isOnline ? "#4F6F6B" : "#E0F2F1B0",
                      margin: 0,
                    }}
                  >
                    Click to take/upload photo
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      color: isOnline ? "#9ca3af" : "#E0F2F180",
                      margin: "5px 0 0 0",
                    }}
                  >
                    Show delivered items with customer/house number
                  </p>
                </>
              )}
            </div>
            <input
              type="file"
              ref={proofImageInputRef}
              accept="image/*"
              capture="environment"
              onChange={handleProofImageUpload}
              style={{ display: "none" }}
            />
          </div>

          <div className="proof-section">
            <label className={`proof-label ${isOnline ? "online" : "offline"}`}>
              ✍️ Customer Signature
            </label>
            <canvas
              ref={signatureCanvasRef}
              className="signature-canvas"
              onMouseDown={handleSignatureStart}
              onMouseMove={handleSignatureMove}
              onMouseUp={handleSignatureEnd}
              onMouseLeave={handleSignatureEnd}
              onTouchStart={handleSignatureStart}
              onTouchMove={handleSignatureMove}
              onTouchEnd={handleSignatureEnd}
            />
            <button
              className="secondary-button"
              onClick={handleClearSignature}
              style={{ padding: "8px 12px", fontSize: "12px" }}
            >
              🗑️ Clear Signature
            </button>
          </div>

          <div className="proof-buttons">
            <button
              className={`proof-cancel-button ${
                isOnline ? "online" : "offline"
              }`}
              onClick={() => {
                setShowProofModal(false);
                setCurrentDeliveryForProof(null);
                setProofImage(null);
                setProofSignature(null);
                setCustomerOTP("");
              }}
            >
              Cancel
            </button>
            <button className="proof-submit-button" onClick={handleSubmitProof}>
              ✅ Submit Proof & Complete Delivery
            </button>
          </div>
        </div>
      </div>
    );
  };

  // Success Modal after delivery
  const SuccessModal = () => {
    if (!showSuccessModal || !lastDeliveryDetails) return null;

    return (
      <div className="success-modal">
        <div className="success-modal-content">
          <div className="success-icon">🎉</div>
          <h2 className="success-title">Delivery Successful!</h2>
          <p className="success-message">
            Your delivery has been completed successfully. Proof has been
            submitted and recorded.
          </p>

          <div className="success-details">
            <p className="success-detail-item">
              <strong>Order ID:</strong> {lastDeliveryDetails.orderId}
            </p>
            <p className="success-detail-item">
              <strong>Customer:</strong> {lastDeliveryDetails.customerName}
            </p>
            <p className="success-detail-item">
              <strong>Location:</strong> {lastDeliveryDetails.deliveryLocation}
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
            Got it!
          </button>
        </div>
      </div>
    );
  };

  // Details Modal
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
            Order Details
          </h2>

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
                  className={`detail-label ${isOnline ? "online" : "offline"}`}
                >
                  Order ID
                </span>
                <span
                  className={`detail-value ${isOnline ? "online" : "offline"}`}
                >
                  {task.orderId}
                </span>
              </div>
              <div className="detail-item">
                <span
                  className={`detail-label ${isOnline ? "online" : "offline"}`}
                >
                  Status
                </span>
                <span
                  className={`detail-value ${isOnline ? "online" : "offline"}`}
                  style={{ color: getStatusColor(task.status) }}
                >
                  {task.status.replace("_", " ").toUpperCase()}
                </span>
              </div>
              <div className="detail-item">
                <span
                  className={`detail-label ${isOnline ? "online" : "offline"}`}
                >
                  Priority
                </span>
                <span
                  className={`detail-value ${isOnline ? "online" : "offline"}`}
                  style={{ color: getPriorityColor(task.priority) }}
                >
                  {task.priority}
                </span>
              </div>
              <div className="detail-item">
                <span
                  className={`detail-label ${isOnline ? "online" : "offline"}`}
                >
                  Order Time
                </span>
                <span
                  className={`detail-value ${isOnline ? "online" : "offline"}`}
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
              👤 Customer Details
            </h3>
            <div className="details-grid">
              <div className="detail-item">
                <span
                  className={`detail-label ${isOnline ? "online" : "offline"}`}
                >
                  Name
                </span>
                <span
                  className={`detail-value ${isOnline ? "online" : "offline"}`}
                >
                  {task.customerName}
                </span>
              </div>
              <div className="detail-item">
                <span
                  className={`detail-label ${isOnline ? "online" : "offline"}`}
                >
                  Phone
                </span>
                <span
                  className={`detail-value ${isOnline ? "online" : "offline"}`}
                >
                  {task.customerPhone}
                </span>
              </div>
              <div className="detail-item">
                <span
                  className={`detail-label ${isOnline ? "online" : "offline"}`}
                >
                  Location
                </span>
                <span
                  className={`detail-value ${isOnline ? "online" : "offline"}`}
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
              🏥 Pharmacy Details
            </h3>
            <div className="details-grid">
              <div className="detail-item">
                <span
                  className={`detail-label ${isOnline ? "online" : "offline"}`}
                >
                  Name
                </span>
                <span
                  className={`detail-value ${isOnline ? "online" : "offline"}`}
                >
                  {task.pharmacyName}
                </span>
              </div>
              <div className="detail-item">
                <span
                  className={`detail-label ${isOnline ? "online" : "offline"}`}
                >
                  Phone
                </span>
                <span
                  className={`detail-value ${isOnline ? "online" : "offline"}`}
                >
                  {task.pharmacyPhone}
                </span>
              </div>
              <div className="detail-item">
                <span
                  className={`detail-label ${isOnline ? "online" : "offline"}`}
                >
                  Location
                </span>
                <span
                  className={`detail-value ${isOnline ? "online" : "offline"}`}
                >
                  {task.pharmacyLocation}
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
                  className={`medicine-name ${isOnline ? "online" : "offline"}`}
                >
                  {medicine.name}
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

          <div className="details-section">
            <h3
              className={`details-section-title ${
                isOnline ? "online" : "offline"
              }`}
            >
              💰 Payment Details
            </h3>
            <div className="details-grid">
              <div className="detail-item">
                <span
                  className={`detail-label ${isOnline ? "online" : "offline"}`}
                >
                  Amount
                </span>
                <span
                  className={`detail-value ${isOnline ? "online" : "offline"}`}
                >
                  {formatIndianCurrency(task.amount)}
                </span>
              </div>
              <div className="detail-item">
                <span
                  className={`detail-label ${isOnline ? "online" : "offline"}`}
                >
                  Tip
                </span>
                <span
                  className={`detail-value ${isOnline ? "online" : "offline"}`}
                  style={{ color: "#10B981" }}
                >
                  {formatIndianCurrency(task.tip || 0)}
                </span>
              </div>
              <div className="detail-item">
                <span
                  className={`detail-label ${isOnline ? "online" : "offline"}`}
                >
                  Payment Method
                </span>
                <span
                  className={`detail-value ${isOnline ? "online" : "offline"}`}
                >
                  {task.paymentMethod || "Cash on Delivery"}
                </span>
              </div>
              <div className="detail-item">
                <span
                  className={`detail-label ${isOnline ? "online" : "offline"}`}
                >
                  Estimated Time
                </span>
                <span
                  className={`detail-value ${isOnline ? "online" : "offline"}`}
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
              style={{ fontSize: "14px" }}
            >
              {task.instructions}
            </p>
            {task.specialInstructions && (
              <p
                className={`detail-value ${isOnline ? "online" : "offline"}`}
                style={{ fontSize: "14px", color: "#009688", marginTop: "8px" }}
              >
                <strong>Special Instructions:</strong>{" "}
                {task.specialInstructions}
              </p>
            )}
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

  // If offline or target achieved, show special offline dashboard
  if (!isOnline || incentives.dailyTargetAchieved) {
    return (
      <div
        className={`dashboard-main-content ${isOnline ? "online" : "offline"}`}
      >
        <audio ref={audioRef} src="/Audio.mp4" preload="auto" />

        <div className="dashboard-header">
          <div>
            <h1 className={`greeting-text ${isOnline ? "online" : "offline"}`}>
              {getCurrentGreeting()}, {getDisplayName()}
            </h1>
            <p className={`subtitle-text ${isOnline ? "online" : "offline"}`}>
              {incentives.dailyTargetAchieved
                ? "🎉 Daily Target Achieved! You earned ₹300 bonus"
                : "Ready to start delivering?"}
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
                style={{ backgroundColor: "#E0F2F1" }}
              ></span>
              <span
                className={`status-text ${isOnline ? "online" : "offline"}`}
              >
                Offline
              </span>
              {!incentives.dailyTargetAchieved && (
                <button
                  className={`status-toggle-button ${
                    isOnline ? "online" : "offline"
                  }`}
                  onClick={handleToggleOnline}
                >
                  Go Online
                </button>
              )}
            </div>
            <div className={`date-display ${isOnline ? "online" : "offline"}`}>
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </div>
          </div>
        </div>

        {incentives.dailyTargetAchieved && (
          <div className="target-achieved-message">
            🎉 Daily Target Achieved! You earned ₹300 bonus
          </div>
        )}

        {/* Special Incentives Section */}
        <div
          className={`special-incentives-section ${
            isOnline ? "online" : "offline"
          }`}
        >
          <h2
            className={`section-title ${isOnline ? "online" : "offline"}`}
            style={{ color: "#E0F2F1", marginBottom: "20px" }}
          >
            Special Incentives & Offers
          </h2>

          <div
            className={`special-incentive-card ${
              isOnline ? "online" : "offline"
            }`}
          >
            <h3 className="special-incentive-title">🎯 Daily Target Bonus</h3>
            <p className="special-incentive-desc">
              Complete 12 orders daily to earn ₹300 bonus
            </p>
            <div className={`progress-bar ${isOnline ? "online" : "offline"}`}>
              <div
                className="progress-fill"
                style={{
                  width: `${(incentives.dailyOrdersCompleted / 12) * 100}%`,
                }}
              ></div>
            </div>
            <p className="special-incentive-desc" style={{ marginTop: "8px" }}>
              {incentives.dailyTargetAchieved
                ? "🎉 Daily Target Achieved! You earned ₹300 bonus"
                : `Complete ${
                    12 - incentives.dailyOrdersCompleted
                  } more orders to reach daily target`}
            </p>
          </div>

          <div
            className={`special-incentive-card ${
              isOnline ? "online" : "offline"
            }`}
          >
            <h3 className="special-incentive-title">👥 Referral Bonus</h3>
            <p className="special-incentive-desc">
              Refer friends and earn ₹200 per referral
            </p>
            <p
              className="special-incentive-desc"
              style={{ marginTop: "8px", fontWeight: "600" }}
            >
              Available: {formatIndianCurrency(incentives.referralBonus)}
            </p>
          </div>

          <div
            className={`special-incentive-card ${
              isOnline ? "online" : "offline"
            }`}
          >
            <h3 className="special-incentive-title">🎁 Joining Bonus</h3>
            <p className="special-incentive-desc">
              Welcome! Complete your first 5 orders to get ₹500
            </p>
            <p
              className="special-incentive-desc"
              style={{ marginTop: "8px", fontWeight: "600" }}
            >
              Available: {formatIndianCurrency(incentives.joiningBonus)}
            </p>
          </div>

          <div
            className={`special-incentive-card ${
              isOnline ? "online" : "offline"
            }`}
          >
            <h3 className="special-incentive-title">💝 Customer Tips</h3>
            <p className="special-incentive-desc">
              Customers can tip you for excellent service
            </p>
            <p
              className="special-incentive-desc"
              style={{ marginTop: "8px", fontWeight: "600" }}
            >
              Earned: {formatIndianCurrency(incentives.customerTips)}
            </p>
          </div>

          {!incentives.dailyTargetAchieved && (
            <button
              className="go-online-large-button"
              onClick={handleToggleOnline}
            >
              Go Online
            </button>
          )}
        </div>

        <button
          className="ai-chat-button"
          onClick={safeToggleAIChat}
          title="AI Assistant"
        >
          💬
        </button>
      </div>
    );
  }

  // Online mode - show full dashboard
  return (
    <div
      className={`dashboard-main-content ${isOnline ? "online" : "offline"}`}
    >
      <ProofModal />
      <SuccessModal />
      <DetailsModal />

      <div className="dashboard-header">
        <div>
          <h1 className={`greeting-text ${isOnline ? "online" : "offline"}`}>
            {getCurrentGreeting()}, {getDisplayName()}
          </h1>
          <p className={`subtitle-text ${isOnline ? "online" : "offline"}`}>
            Here's your delivery overview for today
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
              style={{ backgroundColor: "#10B981" }}
            ></span>
            <span className={`status-text ${isOnline ? "online" : "offline"}`}>
              Online
            </span>
            <button
              className={`status-toggle-button ${
                isOnline ? "online" : "offline"
              }`}
              onClick={handleToggleOnline}
            >
              Go Offline
            </button>
          </div>
          <div className={`date-display ${isOnline ? "online" : "offline"}`}>
            {new Date().toLocaleDateString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
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
              🔔
              {safeGetUnreadCount() > 0 && (
                <span className="notification-badge">
                  {safeGetUnreadCount()}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Incentives Section */}
      <div className={`incentives-section ${isOnline ? "online" : "offline"}`}>
        <div className="incentives-header">
          <h2 className={`section-title ${isOnline ? "online" : "offline"}`}>
            Your Earnings & Incentives
          </h2>
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
                style={{ fontSize: "12px", marginTop: "4px" }}
              >
                Includes {formatIndianCurrency(incentives.customerTips)} tips
              </p>
            )}
          </div>
          <div className={`incentive-card ${isOnline ? "online" : "offline"}`}>
            <h3
              className={`incentive-amount ${isOnline ? "online" : "offline"}`}
            >
              {formatIndianCurrency(incentives.weekly)}
            </h3>
            <p className={`incentive-label ${isOnline ? "online" : "offline"}`}>
              This Week
            </p>
          </div>
          <div className={`incentive-card ${isOnline ? "online" : "offline"}`}>
            <h3
              className={`incentive-amount ${isOnline ? "online" : "offline"}`}
            >
              {formatIndianCurrency(incentives.monthly)}
            </h3>
            <p className={`incentive-label ${isOnline ? "online" : "offline"}`}>
              This Month
            </p>
          </div>
          <div className={`incentive-card ${isOnline ? "online" : "offline"}`}>
            <h3
              className={`incentive-amount ${isOnline ? "online" : "offline"}`}
            >
              {incentives.completedDeliveries}
            </h3>
            <p className={`incentive-label ${isOnline ? "online" : "offline"}`}>
              Completed Deliveries
            </p>
            {incentives.bonusEligible && (
              <span className="bonus-badge">Bonus Eligible</span>
            )}
          </div>
        </div>
      </div>

      {/* Real-time Stats Grid */}
      <div className="stats-grid">
        <div
          className={`stat-card ${isOnline ? "online" : "offline"} ${
            selectedStat === "totalToday" ? "active" : ""
          }`}
          onClick={() => handleStatClick("totalToday")}
        >
          <div className={`stat-icon ${isOnline ? "online" : "offline"}`}>
            📦
          </div>
          <div className="stat-content">
            <h3 className={`stat-number ${isOnline ? "online" : "offline"}`}>
              {completedOrders.length + acceptedOrders.length}
            </h3>
            <p className={`stat-label ${isOnline ? "online" : "offline"}`}>
              Total Deliveries Today
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
            ⏳
          </div>
          <div className="stat-content">
            <h3 className={`stat-number ${isOnline ? "online" : "offline"}`}>
              {availableOrders.length}
            </h3>
            <p className={`stat-label ${isOnline ? "online" : "offline"}`}>
              Pending Acceptance
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
            🚚
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
            ✅
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
            selectedStat === "todayEarnings" ? "active" : ""
          }`}
          onClick={() => handleStatClick("todayEarnings")}
        >
          <div className={`stat-icon ${isOnline ? "online" : "offline"}`}>
            💰
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

        <div
          className={`stat-card ${isOnline ? "online" : "offline"} ${
            selectedStat === "cancelled" ? "active" : ""
          }`}
          onClick={() => handleStatClick("cancelled")}
        >
          <div className={`stat-icon ${isOnline ? "online" : "offline"}`}>
            ❌
          </div>
          <div className="stat-content">
            <h3 className={`stat-number ${isOnline ? "online" : "offline"}`}>
              0
            </h3>
            <p className={`stat-label ${isOnline ? "online" : "offline"}`}>
              Cancelled Orders
            </p>
          </div>
        </div>
      </div>

      <div className="content-grid">
        <div className={`section ${isOnline ? "online" : "offline"}`}>
          <div className="section-header">
            <h2 className={`section-title ${isOnline ? "online" : "offline"}`}>
              {acceptedOrders.length > 0
                ? "Current Deliveries"
                : "Available Deliveries"}
            </h2>
            {completedOrders.length > 0 && (
              <span className="view-all-link" onClick={handleViewAllTasks}>
                View History
              </span>
            )}
          </div>

          {/* Delivery Progress Tracker */}
          {acceptedOrders.length > 0 && (
            <div
              className={`delivery-progress ${isOnline ? "online" : "offline"}`}
            >
              {getProgressSteps()}
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
                          {task.orderId}
                        </h4>
                        <p
                          className={`customer-name ${
                            isOnline ? "online" : "offline"
                          }`}
                        >
                          {task.customerName}
                        </p>
                      </div>
                      <div className="task-status">
                        <span
                          className="status-badge"
                          style={{
                            backgroundColor: getStatusColor(task.status),
                          }}
                        >
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
                          🏥 Pharmacy:
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
                              📞 {task.pharmacyPhone}
                            </button>
                            <button
                              className="direction-button"
                              onClick={() =>
                                handleGetDirections(task.pharmacyLocation)
                              }
                            >
                              🗺️ Get Directions
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
                          🏠 Delivery:
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
                              📞 {task.customerPhone}
                            </button>
                            <button
                              className="customer-direction-button"
                              onClick={() =>
                                handleGetDirections(task.deliveryLocation, true)
                              }
                            >
                              🗺️ Customer Directions
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
                        🕒 {task.estimatedTime}
                      </span>
                      <span
                        className={`meta-item ${
                          isOnline ? "online" : "offline"
                        }`}
                      >
                        📏 {task.distance}
                      </span>
                      <span
                        className={`meta-item ${
                          isOnline ? "online" : "offline"
                        }`}
                      >
                        💰 {formatIndianCurrency(task.amount)}
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
                            🏥 I've Reached Pharmacy
                          </button>
                          <button
                            className="direction-button"
                            onClick={() =>
                              handleGetDirections(task.pharmacyLocation)
                            }
                          >
                            🗺️ Directions to Pharmacy
                          </button>
                        </>
                      )}

                      {task.status === "pickup_reached" && (
                        <button
                          className="success-button"
                          onClick={() => handlePickupCompleted(task)}
                        >
                          ✅ Pickup Completed
                        </button>
                      )}

                      {task.status === "pickup_completed" && (
                        <>
                          <button
                            className="primary-button"
                            onClick={() => handleReachedCustomer(task)}
                          >
                            🏠 I've Reached Customer
                          </button>
                          <button
                            className="customer-direction-button"
                            onClick={() =>
                              handleGetDirections(task.deliveryLocation, true)
                            }
                            style={{ padding: "10px 16px", fontSize: "14px" }}
                          >
                            🗺️ Customer Directions
                          </button>
                        </>
                      )}

                      {task.status === "delivery_reached" && (
                        <button
                          className="success-button"
                          onClick={() => handleOpenProofModal(task)}
                        >
                          📸 Submit Proof of Delivery
                        </button>
                      )}

                      <button
                        className="cancel-order-button"
                        onClick={() => handleCancelOrder(task)}
                      >
                        ❌ Cancel Order
                      </button>

                      <button
                        className="secondary-button"
                        onClick={() => handleViewDetails(task)}
                      >
                        View Details
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
                          {task.orderId}
                        </h4>
                        <p
                          className={`customer-name ${
                            isOnline ? "online" : "offline"
                          }`}
                        >
                          {task.customerName}
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
                          🏥 Pharmacy:
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
                          🏠 Delivery:
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
                            🗺️ Customer Directions
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
                        🕒 {task.estimatedTime}
                      </span>
                      <span
                        className={`meta-item ${
                          isOnline ? "online" : "offline"
                        }`}
                      >
                        📏 {task.distance}
                      </span>
                      <span
                        className={`meta-item ${
                          isOnline ? "online" : "offline"
                        }`}
                      >
                        💰 {formatIndianCurrency(task.amount)}
                      </span>
                      {task.tip > 0 && (
                        <span
                          className={`meta-item ${
                            isOnline ? "online" : "offline"
                          }`}
                          style={{ color: "#10B981", fontWeight: "600" }}
                        >
                          💝 Potential Tip: {formatIndianCurrency(task.tip)}
                        </span>
                      )}
                    </div>

                    <div className="task-actions">
                      <button
                        className="accept-button"
                        onClick={() => handleAcceptOrder(task)}
                      >
                        ✅ Accept Delivery
                      </button>
                      <button
                        className="cancel-order-button"
                        onClick={() => handleCancelAvailableOrder(task)}
                      >
                        ❌ Cancel Order
                      </button>
                      <button
                        className="secondary-button"
                        onClick={() => handleViewDetails(task)}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
          </div>
        </div>

        <div className="sidebar-section">
          {/* Live Route Tracker */}
          {isOnline && acceptedOrders.length > 0 && (
            <LiveRouteTracker
              deliveryData={deliveryData}
              isOnline={isOnline}
              currentOrder={acceptedOrders[0]}
              currentStep={currentStep}
            />
          )}

          {isOnline && acceptedOrders.length === 0 && (
            <LiveRouteTracker
              deliveryData={deliveryData}
              isOnline={isOnline}
              currentOrder={null}
              currentStep={currentStep}
            />
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
                        {order.orderId}
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
                      {order.proofImage && (
                        <p
                          style={{
                            fontSize: "11px",
                            color: "#10B981",
                            margin: "4px 0",
                          }}
                        >
                          📸 Proof submitted
                        </p>
                      )}
                      <p
                        className={`history-time ${
                          isOnline ? "online" : "offline"
                        }`}
                      >
                        Delivered:{" "}
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
        💬
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
