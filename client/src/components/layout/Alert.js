import React from "react";
import { useSelector } from "react-redux";

export const Alert = () => {
  const alerts = useSelector((state) => state.alert.value);
  // alerts !== null &&
  //   alerts.length > 0 &&
  //   alerts.map((alert) =>
  //     // <div key={alert.id} className={`alert alert-${alert.alertType}`}>
  //     //   {alert.msg}
  //     // </div>
  //     console.log(alert.msg)
  //   );

  if (alerts !== null && alerts.length > 0) {
    //console.log(alerts.msg);
    return alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.alertType}`}>
        {alert.msg}
      </div>
    ));
  }
};

// const Alert = ({ alerts }) =>
//   alerts !== null &&
//   alerts.length > 0 &&
//   alerts.map((alert) => (
//     <div key={alert.id} className={`alert alert-${alert.alertType}`}>
//       {alert.msg}
//     </div>
//   ));

// Alert.propTypes = {
//   alerts: PropTypes.array.isRequired,
// };

// const mapStateToProps = (state) => ({
//   alerts: state.alert,
// });

// export default connect(mapStateToProps)(Alert);

//export default Alert;
