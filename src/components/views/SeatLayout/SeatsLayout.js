import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const SeatsLayout = () => {
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [zoomLevel, setZoomLevel] = useState(1); // Initial zoom level
    const handleSeatSelection = (seat, type) => {
        if (type === 'unavailable') return; // Do nothing for unavailable seats

        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };
    const seatTypes = {
        selected: '#FFD700', // gold
        available: '#ADD8E6', // light blue
        vip: '#4B0082', // purple
        unavailable: '#D3D3D3', // light grey
    };
    const generateSeatLayout = () => {
        const rows = 'ABCDEFGHIJK'.split(''); // Rows from A to K

        // Predefine 15 VIP and 15 Regular seats
        const vipSeats = [
            'A1', 'A2', 'A3', 'A4', 'A5',
            'B1', 'B2', 'B3', 'B4', 'B5',
            'C1', 'C2', 'C3', 'C4', 'C5'
        ];
        const unavailableSeats = [
            'D1', 'D2', 'D3', 'D4', 'D5',
            'E1', 'E2', 'E3', 'E4', 'E5',
            'F1', 'F2', 'F3', 'F4', 'F5'
        ];

        const seatLayout = rows.map(row => {
            return Array.from({ length: 15 }, (_, i) => {
                const seatNumber = `${row}${i + 1}`;
                let type = 'available'; // Default type is available (regular)

                // Assign seat types based on predefined seats
                if (vipSeats.includes(seatNumber)) {
                    type = 'vip';
                } else if (unavailableSeats.includes(seatNumber)) {
                    type = 'unavailable';
                }

                return { seat: seatNumber, type };
            });
        });

        return seatLayout;
    };
    const seatLayout = generateSeatLayout(); // Generate the seat layout

    return (
        <View style={{ backgroundColor: '#f0f0f0', padding: 10 }}>
            <View style={styles.screenSection}>
                <Svg height="60" width="100%" viewBox="0 0 100 20">
                    <Path d="M0 20 Q50 0 100 20" fill="transparent" stroke="#84bedb" strokeWidth="1" />
                </Svg>
                <Text style={styles.screenLabel}>SCREEN</Text>
            </View>
            {/* Seat Layout */}
            <View style={[styles.seatLayout, { transform: [{ scale: zoomLevel }] }]}>
                {seatLayout.map((row, rowIndex) => (
                    <View key={rowIndex} style={styles.seatRow}>
                        {row.map(({ seat, type }) => (
                            <TouchableOpacity
                                key={seat}
                                style={[
                                    styles.seat,
                                    { backgroundColor: selectedSeats.includes(seat) ? seatTypes.selected : seatTypes[type] },
                                ]}
                                onPress={() => handleSeatSelection(seat, type)}
                                disabled={type === 'unavailable'}>

                            </TouchableOpacity>
                        ))}
                    </View>
                ))}
            </View>

            <View style={styles.zoomControls}>
                <TouchableOpacity onPress={() => setZoomLevel(prev => Math.max(prev - 0.1, 0.5))} style={styles.zoomButton}>
                    <Icon name="remove" size={17} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setZoomLevel(prev => Math.min(prev + 0.1, 2))} style={styles.zoomButton}>
                    <Icon name="add" size={17} color="#000" />
                </TouchableOpacity>
            </View>
        </View>
    );
}


export default SeatsLayout;
