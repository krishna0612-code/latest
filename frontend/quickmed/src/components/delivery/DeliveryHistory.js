// import React, { useState, useEffect } from "react";

// const DeliveryHistory = ({ deliveryData, completedOrders = [] }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [taskFilter, setTaskFilter] = useState("all");
//   const [allCompletedOrders, setAllCompletedOrders] = useState([]);

//   // Combine delivered orders from props and completed orders from dashboard
//   useEffect(() => {
//     const combinedOrders = [
//       ...(deliveryData?.completedTasks || []),
//       ...completedOrders.map((order) => ({
//         id: order.id,
//         orderId: order.orderId,
//         customerName: order.customerName,
//         customerPhone: order.customerPhone,
//         pickupLocation: order.pharmacyLocation,
//         deliveryLocation: order.deliveryLocation,
//         amount: order.amount,
//         tip: order.tip || 0,
//         deliveryDate:
//           order.deliveryDate || new Date().toISOString().split("T")[0],
//         completedTime: order.completedTime || new Date().toLocaleTimeString(),
//         rating: order.rating || Math.floor(Math.random() * 2) + 4,
//         feedback:
//           order.feedback ||
//           (Math.random() > 0.5
//             ? "Great service! Very professional and on time."
//             : "Excellent delivery service!"),
//         status: "delivered",
//       })),
//     ];

//     // Remove duplicates based on orderId
//     const uniqueOrders = combinedOrders.filter(
//       (order, index, self) =>
//         index === self.findIndex((o) => o.orderId === order.orderId)
//     );

//     setAllCompletedOrders(uniqueOrders);
//   }, [deliveryData, completedOrders]);

//   const styles = {
//     mainContent: {
//       padding: "30px",
//       minHeight: "100vh",
//       backgroundColor: "#E0F2F1", // softbg
//     },
//     header: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "flex-start",
//       marginBottom: "30px",
//     },
//     greeting: {
//       fontSize: "28px",
//       fontWeight: "700",
//       color: "#124441", // darktext
//       margin: "0 0 8px 0",
//     },
//     subtitle: {
//       fontSize: "16px",
//       color: "#4F6F6B", // softtext
//       margin: 0,
//     },
//     taskHeaderActions: {
//       display: "flex",
//       gap: "16px",
//       alignItems: "center",
//     },
//     searchBox: {
//       position: "relative",
//       display: "flex",
//       alignItems: "center",
//     },
//     searchInput: {
//       padding: "8px 12px 8px 35px",
//       border: "1px solid #4DB6AC", // mint
//       borderRadius: "8px",
//       fontSize: "14px",
//       width: "250px",
//       outline: "none",
//       backgroundColor: "#FFFFFF", // white
//       color: "#124441", // darktext
//     },
//     searchIcon: {
//       position: "absolute",
//       left: "10px",
//       color: "#4DB6AC", // mint
//     },
//     taskFilters: {
//       display: "flex",
//       gap: "8px",
//     },
//     filterButton: {
//       padding: "8px 16px",
//       backgroundColor: "#FFFFFF", // white
//       border: "1px solid #4DB6AC", // mint
//       borderRadius: "6px",
//       cursor: "pointer",
//       fontSize: "14px",
//       fontWeight: "500",
//       transition: "all 0.3s ease",
//       color: "#4F6F6B", // softtext
//     },
//     filterButtonActive: {
//       backgroundColor: "#009688", // primary
//       color: "#FFFFFF", // white
//       borderColor: "#009688", // primary
//     },
//     tasksContainer: {
//       display: "flex",
//       flexDirection: "column",
//       gap: "16px",
//     },
//     detailedTaskCard: {
//       backgroundColor: "#FFFFFF", // white
//       padding: "20px",
//       borderRadius: "12px",
//       boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
//       border: "1px solid #4DB6AC", // mint
//       transition: "all 0.3s ease",
//     },
//     taskHeader: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "flex-start",
//       marginBottom: "16px",
//     },
//     taskMainInfo: {
//       flex: 1,
//     },
//     orderHeader: {
//       display: "flex",
//       justifyContent: "space-between",
//       alignItems: "center",
//       marginBottom: "8px",
//     },
//     orderId: {
//       fontSize: "18px",
//       fontWeight: "600",
//       color: "#124441", // darktext
//       margin: 0,
//     },
//     ratingDisplay: {
//       display: "flex",
//       alignItems: "center",
//       gap: "4px",
//     },
//     ratingText: {
//       fontSize: "12px",
//       color: "#4F6F6B", // softtext
//     },
//     customerInfo: {
//       fontSize: "14px",
//       color: "#4F6F6B", // softtext
//       margin: "4px 0 0 0",
//     },
//     deliveryDate: {
//       fontSize: "12px",
//       color: "#4DB6AC", // mint
//       margin: "4px 0 0 0",
//     },
//     taskStatus: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "flex-end",
//       gap: "8px",
//     },
//     statusBadge: {
//       color: "#FFFFFF", // white
//       padding: "4px 8px",
//       borderRadius: "12px",
//       fontSize: "12px",
//       fontWeight: "500",
//     },
//     amountBadge: {
//       fontSize: "16px",
//       fontWeight: "600",
//       color: "#009688", // primary
//     },
//     taskDetails: {
//       marginTop: "16px",
//     },
//     locationRow: {
//       display: "flex",
//       gap: "20px",
//       marginBottom: "12px",
//     },
//     locationColumn: {
//       flex: 1,
//     },
//     detailLabel: {
//       fontSize: "14px",
//       color: "#4F6F6B", // softtext
//       fontWeight: "500",
//     },
//     detailText: {
//       fontSize: "14px",
//       color: "#124441", // darktext
//       margin: "4px 0 0 0",
//     },
//     detailSection: {
//       marginBottom: "12px",
//     },
//     feedbackText: {
//       fontSize: "14px",
//       color: "#124441", // darktext
//       fontStyle: "italic",
//       margin: "4px 0 0 0",
//     },
//     noTasks: {
//       textAlign: "center",
//       padding: "60px 20px",
//       backgroundColor: "#FFFFFF", // white
//       borderRadius: "12px",
//       border: "2px dashed #4DB6AC", // mint
//       color: "#124441", // darktext
//     },
//     noTasksIcon: {
//       fontSize: "48px",
//       marginBottom: "16px",
//       color: "#009688", // primary
//     },
//     noTasksText: {
//       fontSize: "18px",
//       fontWeight: "600",
//       color: "#124441", // darktext
//       margin: "0 0 8px 0",
//     },
//     noTasksSubtext: {
//       fontSize: "14px",
//       color: "#4F6F6B", // softtext
//       margin: 0,
//     },
//     statsSummary: {
//       display: "grid",
//       gridTemplateColumns: "repeat(4, 1fr)",
//       gap: "16px",
//       marginBottom: "24px",
//     },
//     statCard: {
//       backgroundColor: "#FFFFFF", // white
//       padding: "20px",
//       borderRadius: "12px",
//       boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
//       border: "1px solid #4DB6AC", // mint
//       textAlign: "center",
//     },
//     statNumber: {
//       fontSize: "24px",
//       fontWeight: "700",
//       color: "#009688", // primary
//       margin: "0 0 4px 0",
//     },
//     statLabel: {
//       fontSize: "12px",
//       color: "#4F6F6B", // softtext
//       margin: 0,
//       fontWeight: "500",
//     },
//   };

//   const formatIndianCurrency = (amount) => {
//     return `₹${amount.toLocaleString("en-IN")}`;
//   };

//   // Filter tasks based on search and filter
//   const getFilteredTasks = () => {
//     let filtered = allCompletedOrders;

//     if (taskFilter !== "all") {
//       const now = new Date();
//       if (taskFilter === "today") {
//         const today = now.toISOString().split("T")[0];
//         filtered = filtered.filter((task) => task.deliveryDate === today);
//       } else if (taskFilter === "week") {
//         const oneWeekAgo = new Date(now);
//         oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
//         filtered = filtered.filter(
//           (task) => new Date(task.deliveryDate) >= oneWeekAgo
//         );
//       } else if (taskFilter === "month") {
//         const oneMonthAgo = new Date(now);
//         oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
//         filtered = filtered.filter(
//           (task) => new Date(task.deliveryDate) >= oneMonthAgo
//         );
//       }
//     }

//     if (searchTerm) {
//       filtered = filtered.filter(
//         (task) =>
//           task.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           task.orderId.toLowerCase().includes(searchTerm.toLowerCase()) ||
//           task.pickupLocation
//             .toLowerCase()
//             .includes(searchTerm.toLowerCase()) ||
//           task.deliveryLocation.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//     }

//     return filtered.sort(
//       (a, b) => new Date(b.deliveryDate) - new Date(a.deliveryDate)
//     );
//   };

//   const filteredTasks = getFilteredTasks();

//   // Calculate statistics
//   const totalEarnings = filteredTasks.reduce(
//     (sum, task) => sum + task.amount + (task.tip || 0),
//     0
//   );
//   const totalTips = filteredTasks.reduce(
//     (sum, task) => sum + (task.tip || 0),
//     0
//   );
//   const averageRating =
//     filteredTasks.length > 0
//       ? (
//           filteredTasks.reduce((sum, task) => sum + (task.rating || 0), 0) /
//           filteredTasks.length
//         ).toFixed(1)
//       : 0;

//   return (
//     <div style={styles.mainContent}>
//       <div style={styles.header}>
//         <div>
//           <h1 style={styles.greeting}>Delivery History</h1>
//           <p style={styles.subtitle}>View your delivered orders and earnings</p>
//         </div>
//         <div style={styles.taskHeaderActions}>
//           <div style={styles.searchBox}>
//             <input
//               type="text"
//               placeholder="Search delivery history..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               style={styles.searchInput}
//             />
//             <span style={styles.searchIcon}>🔍</span>
//           </div>
//           <div style={styles.taskFilters}>
//             <button
//               style={{
//                 ...styles.filterButton,
//                 ...(taskFilter === "today" ? styles.filterButtonActive : {}),
//               }}
//               onClick={() => setTaskFilter("today")}
//             >
//               Today
//             </button>
//             <button
//               style={{
//                 ...styles.filterButton,
//                 ...(taskFilter === "week" ? styles.filterButtonActive : {}),
//               }}
//               onClick={() => setTaskFilter("week")}
//             >
//               This Week
//             </button>
//             <button
//               style={{
//                 ...styles.filterButton,
//                 ...(taskFilter === "month" ? styles.filterButtonActive : {}),
//               }}
//               onClick={() => setTaskFilter("month")}
//             >
//               This Month
//             </button>
//             <button
//               style={{
//                 ...styles.filterButton,
//                 ...(taskFilter === "all" ? styles.filterButtonActive : {}),
//               }}
//               onClick={() => setTaskFilter("all")}
//             >
//               All Time
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Statistics Summary */}
//       {filteredTasks.length > 0 && (
//         <div style={styles.statsSummary}>
//           <div style={styles.statCard}>
//             <h3 style={styles.statNumber}>{filteredTasks.length}</h3>
//             <p style={styles.statLabel}>Total Deliveries</p>
//           </div>
//           <div style={styles.statCard}>
//             <h3 style={styles.statNumber}>
//               {formatIndianCurrency(totalEarnings)}
//             </h3>
//             <p style={styles.statLabel}>Total Earnings</p>
//           </div>
//           <div style={styles.statCard}>
//             <h3 style={styles.statNumber}>{formatIndianCurrency(totalTips)}</h3>
//             <p style={styles.statLabel}>Total Tips</p>
//           </div>
//           <div style={styles.statCard}>
//             <h3 style={styles.statNumber}>{averageRating} ⭐</h3>
//             <p style={styles.statLabel}>Average Rating</p>
//           </div>
//         </div>
//       )}

//       <div style={styles.tasksContainer}>
//         {filteredTasks.length === 0 ? (
//           <div style={styles.noTasks}>
//             <div style={styles.noTasksIcon}>📦</div>
//             <h3 style={styles.noTasksText}>No delivery history found</h3>
//             <p style={styles.noTasksSubtext}>
//               {searchTerm
//                 ? "Try adjusting your search terms"
//                 : "Complete some deliveries to see your history here!"}
//             </p>
//           </div>
//         ) : (
//           filteredTasks.map((task) => (
//             <div key={task.id} style={styles.detailedTaskCard}>
//               <div style={styles.taskHeader}>
//                 <div style={styles.taskMainInfo}>
//                   <div style={styles.orderHeader}>
//                     <h3 style={styles.orderId}>{task.orderId}</h3>
//                     <div style={styles.ratingDisplay}>
//                       {"⭐".repeat(task.rating || 0)}
//                       <span style={styles.ratingText}>
//                         {task.rating || 0}/5
//                       </span>
//                     </div>
//                   </div>
//                   <p style={styles.customerInfo}>
//                     {task.customerName} • {task.customerPhone}
//                   </p>
//                   <p style={styles.deliveryDate}>
//                     Delivered on{" "}
//                     {new Date(task.deliveryDate).toLocaleDateString("en-US", {
//                       weekday: "long",
//                       year: "numeric",
//                       month: "long",
//                       day: "numeric",
//                     })}{" "}
//                     at {task.completedTime}
//                   </p>
//                 </div>
//                 <div style={styles.taskStatus}>
//                   <span
//                     style={{
//                       ...styles.statusBadge,
//                       backgroundColor: "#009688", // primary
//                     }}
//                   >
//                     Delivered
//                   </span>
//                   <div style={styles.amountBadge}>
//                     {formatIndianCurrency(task.amount)}
//                     {task.tip > 0 && (
//                       <div
//                         style={{
//                           fontSize: "12px",
//                           color: "#4DB6AC",
//                           marginTop: "2px",
//                         }}
//                       >
//                         +{formatIndianCurrency(task.tip)} tip
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               </div>

//               <div style={styles.taskDetails}>
//                 <div style={styles.locationRow}>
//                   <div style={styles.locationColumn}>
//                     <strong style={styles.detailLabel}>
//                       🏥 Pickup Location:
//                     </strong>
//                     <p style={styles.detailText}>{task.pickupLocation}</p>
//                   </div>
//                   <div style={styles.locationColumn}>
//                     <strong style={styles.detailLabel}>
//                       🏠 Delivery Location:
//                     </strong>
//                     <p style={styles.detailText}>{task.deliveryLocation}</p>
//                   </div>
//                 </div>
//                 {task.feedback && (
//                   <div style={styles.detailSection}>
//                     <strong style={styles.detailLabel}>
//                       💬 Customer Feedback:
//                     </strong>
//                     <p style={styles.feedbackText}>"{task.feedback}"</p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// // Add default props
// DeliveryHistory.defaultProps = {
//   deliveryData: {
//     completedTasks: [],
//   },
//   completedOrders: [],
// };

// export default DeliveryHistory;
import React, { useState, useEffect } from "react";

const DeliveryHistory = ({ driverId }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [taskFilter, setTaskFilter] = useState("all");
  const [completedOrders, setCompletedOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stats, setStats] = useState({
    totalDeliveries: 0,
    totalEarnings: 0,
    totalTips: 0,
    averageRating: 0,
  });

  // Fetch delivery history from API
  useEffect(() => {
    fetchDeliveryHistory();
  }, [driverId]);

  // Calculate stats when orders change
  useEffect(() => {
    calculateStats();
  }, [completedOrders, taskFilter, searchTerm]);

  const fetchDeliveryHistory = async () => {
    try {
      setLoading(true);
      setError(null);

      // If no driverId, try to get it from localStorage or context
      const currentDriverId = driverId || localStorage.getItem("driverId");

      if (!currentDriverId) {
        throw new Error("Driver ID not found");
      }

      // Replace with your actual API endpoint
      const apiUrl =
        process.env.REACT_APP_API_URL || "http://localhost:5000/api";

      const response = await fetch(
        `${apiUrl}/drivers/${currentDriverId}/deliveries/completed`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setCompletedOrders(data.data || []);
      } else {
        throw new Error(data.message || "Failed to load delivery history");
      }
    } catch (err) {
      console.error("Error fetching delivery history:", err);
      setError(err.message);

      // Check if there's cached data in localStorage
      const cachedHistory = localStorage.getItem("cachedDeliveryHistory");
      if (cachedHistory) {
        try {
          setCompletedOrders(JSON.parse(cachedHistory));
        } catch (parseError) {
          console.error("Error parsing cached data:", parseError);
        }
      }
    } finally {
      setLoading(false);
    }
  };

  const calculateStats = () => {
    const filtered = getFilteredTasks();

    const totalEarnings = filtered.reduce(
      (sum, task) => sum + (task.amount || 0) + (task.tip || 0),
      0
    );

    const totalTips = filtered.reduce((sum, task) => sum + (task.tip || 0), 0);

    const totalDeliveries = filtered.length;

    const averageRating =
      totalDeliveries > 0
        ? (
            filtered.reduce((sum, task) => sum + (task.rating || 0), 0) /
            totalDeliveries
          ).toFixed(1)
        : 0;

    setStats({
      totalDeliveries,
      totalEarnings,
      totalTips,
      averageRating,
    });

    // Cache the data for offline use
    if (completedOrders.length > 0) {
      localStorage.setItem(
        "cachedDeliveryHistory",
        JSON.stringify(completedOrders)
      );
    }
  };

  const formatIndianCurrency = (amount) => {
    return `₹${(amount || 0).toLocaleString("en-IN")}`;
  };

  const getFilteredTasks = () => {
    let filtered = completedOrders;

    if (taskFilter !== "all") {
      const now = new Date();
      if (taskFilter === "today") {
        const today = now.toISOString().split("T")[0];
        filtered = filtered.filter(
          (task) =>
            task.deliveryDate === today || task.completedTime?.startsWith(today)
        );
      } else if (taskFilter === "week") {
        const oneWeekAgo = new Date(now);
        oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
        filtered = filtered.filter(
          (task) =>
            new Date(task.deliveryDate || task.completedTime) >= oneWeekAgo
        );
      } else if (taskFilter === "month") {
        const oneMonthAgo = new Date(now);
        oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
        filtered = filtered.filter(
          (task) =>
            new Date(task.deliveryDate || task.completedTime) >= oneMonthAgo
        );
      }
    }

    if (searchTerm) {
      filtered = filtered.filter(
        (task) =>
          (task.customerName || "")
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          (task.orderId || "")
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          (task.pickupLocation || "")
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          (task.deliveryLocation || "")
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }

    return filtered.sort(
      (a, b) =>
        new Date(b.deliveryDate || b.completedTime) -
        new Date(a.deliveryDate || a.completedTime)
    );
  };

  const filteredTasks = getFilteredTasks();

  const handleRefresh = () => {
    fetchDeliveryHistory();
  };

  const styles = {
    mainContent: {
      padding: "30px",
      minHeight: "100vh",
      backgroundColor: "#E0F2F1",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "30px",
      flexWrap: "wrap",
      gap: "20px",
    },
    greeting: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#124441",
      margin: "0 0 8px 0",
    },
    subtitle: {
      fontSize: "16px",
      color: "#4F6F6B",
      margin: 0,
      display: "flex",
      alignItems: "center",
      gap: "10px",
    },
    taskHeaderActions: {
      display: "flex",
      gap: "16px",
      alignItems: "center",
      flexWrap: "wrap",
    },
    searchBox: {
      position: "relative",
      display: "flex",
      alignItems: "center",
    },
    searchInput: {
      padding: "8px 12px 8px 35px",
      border: "1px solid #4DB6AC",
      borderRadius: "8px",
      fontSize: "14px",
      width: "250px",
      outline: "none",
      backgroundColor: "#FFFFFF",
      color: "#124441",
    },
    searchIcon: {
      position: "absolute",
      left: "10px",
      color: "#4DB6AC",
    },
    taskFilters: {
      display: "flex",
      gap: "8px",
      flexWrap: "wrap",
    },
    filterButton: {
      padding: "8px 16px",
      backgroundColor: "#FFFFFF",
      border: "1px solid #4DB6AC",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "14px",
      fontWeight: "500",
      transition: "all 0.3s ease",
      color: "#4F6F6B",
    },
    filterButtonActive: {
      backgroundColor: "#009688",
      color: "#FFFFFF",
      borderColor: "#009688",
    },
    tasksContainer: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
    },
    detailedTaskCard: {
      backgroundColor: "#FFFFFF",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
      border: "1px solid #4DB6AC",
      transition: "all 0.3s ease",
    },
    taskHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "flex-start",
      marginBottom: "16px",
      flexWrap: "wrap",
      gap: "15px",
    },
    taskMainInfo: {
      flex: 1,
      minWidth: "300px",
    },
    orderHeader: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "8px",
      flexWrap: "wrap",
      gap: "10px",
    },
    orderId: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#124441",
      margin: 0,
    },
    ratingDisplay: {
      display: "flex",
      alignItems: "center",
      gap: "4px",
    },
    ratingText: {
      fontSize: "12px",
      color: "#4F6F6B",
    },
    customerInfo: {
      fontSize: "14px",
      color: "#4F6F6B",
      margin: "4px 0 0 0",
    },
    deliveryDate: {
      fontSize: "12px",
      color: "#4DB6AC",
      margin: "4px 0 0 0",
    },
    taskStatus: {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      gap: "8px",
      minWidth: "120px",
    },
    statusBadge: {
      color: "#FFFFFF",
      padding: "4px 8px",
      borderRadius: "12px",
      fontSize: "12px",
      fontWeight: "500",
    },
    amountBadge: {
      fontSize: "16px",
      fontWeight: "600",
      color: "#009688",
    },
    taskDetails: {
      marginTop: "16px",
    },
    locationRow: {
      display: "flex",
      gap: "20px",
      marginBottom: "12px",
      flexWrap: "wrap",
    },
    locationColumn: {
      flex: 1,
      minWidth: "250px",
    },
    detailLabel: {
      fontSize: "14px",
      color: "#4F6F6B",
      fontWeight: "500",
    },
    detailText: {
      fontSize: "14px",
      color: "#124441",
      margin: "4px 0 0 0",
    },
    detailSection: {
      marginBottom: "12px",
    },
    feedbackText: {
      fontSize: "14px",
      color: "#124441",
      fontStyle: "italic",
      margin: "4px 0 0 0",
    },
    noTasks: {
      textAlign: "center",
      padding: "60px 20px",
      backgroundColor: "#FFFFFF",
      borderRadius: "12px",
      border: "2px dashed #4DB6AC",
      color: "#124441",
    },
    noTasksIcon: {
      fontSize: "48px",
      marginBottom: "16px",
      color: "#009688",
    },
    noTasksText: {
      fontSize: "18px",
      fontWeight: "600",
      color: "#124441",
      margin: "0 0 8px 0",
    },
    noTasksSubtext: {
      fontSize: "14px",
      color: "#4F6F6B",
      margin: 0,
    },
    statsSummary: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
      gap: "16px",
      marginBottom: "24px",
    },
    statCard: {
      backgroundColor: "#FFFFFF",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
      border: "1px solid #4DB6AC",
      textAlign: "center",
    },
    statNumber: {
      fontSize: "24px",
      fontWeight: "700",
      color: "#009688",
      margin: "0 0 4px 0",
    },
    statLabel: {
      fontSize: "12px",
      color: "#4F6F6B",
      margin: 0,
      fontWeight: "500",
    },
    loadingContainer: {
      textAlign: "center",
      padding: "60px 20px",
    },
    errorContainer: {
      backgroundColor: "#FFEBEE",
      border: "1px solid #FFCDD2",
      borderRadius: "8px",
      padding: "20px",
      marginBottom: "20px",
      color: "#C62828",
    },
    retryButton: {
      padding: "8px 16px",
      backgroundColor: "#009688",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      marginTop: "10px",
      marginRight: "10px",
    },
    refreshButton: {
      padding: "8px 12px",
      backgroundColor: "#4DB6AC",
      color: "white",
      border: "none",
      borderRadius: "6px",
      cursor: "pointer",
      fontSize: "14px",
    },
  };

  if (loading) {
    return (
      <div style={styles.mainContent}>
        <div style={styles.loadingContainer}>
          <p>Loading delivery history...</p>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.mainContent}>
      <div style={styles.header}>
        <div>
          <h1 style={styles.greeting}>Delivery History</h1>
          <p style={styles.subtitle}>
            View your delivered orders and earnings
            <button onClick={handleRefresh} style={styles.refreshButton}>
              🔄 Refresh
            </button>
          </p>
        </div>
        <div style={styles.taskHeaderActions}>
          <div style={styles.searchBox}>
            <input
              type="text"
              placeholder="Search delivery history..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={styles.searchInput}
            />
            <span style={styles.searchIcon}>🔍</span>
          </div>
          <div style={styles.taskFilters}>
            <button
              style={{
                ...styles.filterButton,
                ...(taskFilter === "today" ? styles.filterButtonActive : {}),
              }}
              onClick={() => setTaskFilter("today")}
            >
              Today
            </button>
            <button
              style={{
                ...styles.filterButton,
                ...(taskFilter === "week" ? styles.filterButtonActive : {}),
              }}
              onClick={() => setTaskFilter("week")}
            >
              This Week
            </button>
            <button
              style={{
                ...styles.filterButton,
                ...(taskFilter === "month" ? styles.filterButtonActive : {}),
              }}
              onClick={() => setTaskFilter("month")}
            >
              This Month
            </button>
            <button
              style={{
                ...styles.filterButton,
                ...(taskFilter === "all" ? styles.filterButtonActive : {}),
              }}
              onClick={() => setTaskFilter("all")}
            >
              All Time
            </button>
          </div>
        </div>
      </div>

      {error && (
        <div style={styles.errorContainer}>
          <p>Error: {error}</p>
          <button onClick={handleRefresh} style={styles.retryButton}>
            Retry
          </button>
        </div>
      )}

      {/* Statistics Summary */}
      {filteredTasks.length > 0 && (
        <div style={styles.statsSummary}>
          <div style={styles.statCard}>
            <h3 style={styles.statNumber}>{stats.totalDeliveries}</h3>
            <p style={styles.statLabel}>Total Deliveries</p>
          </div>
          <div style={styles.statCard}>
            <h3 style={styles.statNumber}>
              {formatIndianCurrency(stats.totalEarnings)}
            </h3>
            <p style={styles.statLabel}>Total Earnings</p>
          </div>
          <div style={styles.statCard}>
            <h3 style={styles.statNumber}>
              {formatIndianCurrency(stats.totalTips)}
            </h3>
            <p style={styles.statLabel}>Total Tips</p>
          </div>
          <div style={styles.statCard}>
            <h3 style={styles.statNumber}>{stats.averageRating} ⭐</h3>
            <p style={styles.statLabel}>Average Rating</p>
          </div>
        </div>
      )}

      <div style={styles.tasksContainer}>
        {filteredTasks.length === 0 ? (
          <div style={styles.noTasks}>
            <div style={styles.noTasksIcon}>📦</div>
            <h3 style={styles.noTasksText}>
              {searchTerm || taskFilter !== "all"
                ? "No matching deliveries found"
                : error
                ? "Failed to load delivery history"
                : "No delivery history yet"}
            </h3>
            <p style={styles.noTasksSubtext}>
              {searchTerm
                ? "Try adjusting your search terms"
                : error
                ? "Please check your connection and try again"
                : "Complete some deliveries to see your history here!"}
            </p>
            {error && (
              <button onClick={handleRefresh} style={styles.retryButton}>
                Retry
              </button>
            )}
          </div>
        ) : (
          filteredTasks.map((task) => (
            <div key={task._id || task.id} style={styles.detailedTaskCard}>
              <div style={styles.taskHeader}>
                <div style={styles.taskMainInfo}>
                  <div style={styles.orderHeader}>
                    <h3 style={styles.orderId}>
                      {task.orderId || `ORD-${(task._id || "").slice(-8)}`}
                    </h3>
                    <div style={styles.ratingDisplay}>
                      {"⭐".repeat(Math.floor(task.rating || 0))}
                      <span style={styles.ratingText}>
                        {task.rating ? task.rating.toFixed(1) : "N/A"}/5
                      </span>
                    </div>
                  </div>
                  <p style={styles.customerInfo}>
                    {task.customerName || "Customer"} •{" "}
                    {task.customerPhone || "Phone not provided"}
                  </p>
                  <p style={styles.deliveryDate}>
                    Delivered on{" "}
                    {task.deliveryDate || task.completedTime
                      ? new Date(
                          task.deliveryDate || task.completedTime
                        ).toLocaleDateString("en-US", {
                          weekday: "long",
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "Date not available"}{" "}
                    {task.completedTime
                      ? `at ${new Date(
                          task.completedTime
                        ).toLocaleTimeString()}`
                      : ""}
                  </p>
                </div>
                <div style={styles.taskStatus}>
                  <span
                    style={{
                      ...styles.statusBadge,
                      backgroundColor: "#009688",
                    }}
                  >
                    {task.status || "Delivered"}
                  </span>
                  <div style={styles.amountBadge}>
                    {formatIndianCurrency(task.amount || 0)}
                    {task.tip > 0 && (
                      <div
                        style={{
                          fontSize: "12px",
                          color: "#4DB6AC",
                          marginTop: "2px",
                        }}
                      >
                        +{formatIndianCurrency(task.tip)} tip
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div style={styles.taskDetails}>
                <div style={styles.locationRow}>
                  <div style={styles.locationColumn}>
                    <strong style={styles.detailLabel}>
                      🏥 Pickup Location:
                    </strong>
                    <p style={styles.detailText}>
                      {task.pickupLocation || "Not specified"}
                    </p>
                  </div>
                  <div style={styles.locationColumn}>
                    <strong style={styles.detailLabel}>
                      🏠 Delivery Location:
                    </strong>
                    <p style={styles.detailText}>
                      {task.deliveryLocation || "Not specified"}
                    </p>
                  </div>
                </div>
                {task.feedback && (
                  <div style={styles.detailSection}>
                    <strong style={styles.detailLabel}>
                      💬 Customer Feedback:
                    </strong>
                    <p style={styles.feedbackText}>"{task.feedback}"</p>
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DeliveryHistory;
