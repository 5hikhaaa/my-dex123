import { Card, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "20px",
    fontWeight: "700",
  },
  text: {
    fontSize: "16px",
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    border: "1px solid #e7eaf3",
    borderRadius: "0.5rem",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function QuickStart({ _isServerInfo }) {
  const { Moralis } = useMoralis();

  const _isInchDex = useMemo(
    () => (Moralis.Plugins?.oneInch ? true : false),
    [Moralis.Plugins?.oneInch],
  );

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <div>
        <Card
          style={styles.card}
          title={
            <>
              <Text strong>
                Welcome to my decentralised crypto exchange and wallet
              </Text>
            </>
          }
        >
          <Timeline mode="left" style={styles.timeline}>
            <Text style={styles.text}>💰💰</Text>
          </Timeline>
        </Card>
      </div>
    </div>
  );
}
