import { useUser } from "@clerk/clerk-react";
import { FinancialRecordForm } from "./financial-record-form";
import { FinancialRecordList } from "./financial-record-list";
import "./financial-record.css";
import { useFinancialRecords } from "../../contexts/financial-record-context";
import { useMemo } from "react";

export const Dashboard = () => {
  const { user } = useUser();
  const { records } = useFinancialRecords();

  const totalMonthly = useMemo(() => {
    let totalAmount = 0;
    records.forEach((record) => {
      totalAmount += record.amount;
    });
    return totalAmount;
  }, [records]);

  return (
    <div className="dashboard-container">
      <div style={{ width: "100%", maxWidth: 800 }}>
        <h1
          style={{
            marginTop: "18px",
            marginBottom: "18px",
            fontWeight: 700,
            fontSize: "1.7rem",
            letterSpacing: "0.5px",
            textAlign: "center",
            color: "#fff",
          }}
        >
          Welcome {user?.firstName}! Here Are Your Finances:
        </h1>
        <FinancialRecordForm />
        <div className="total-amount">Total Monthly: ${totalMonthly}</div>
        <FinancialRecordList />
      </div>
    </div>
  );
};