import React, { useState } from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const SelectSeat = ({ navigation }) => {
    const generateSeatLayout = () => {
        const rows = 'ABCDEFGHIJK'.split(''); // Rows from A to K
        const seatLayout = rows.map(row => Array.from({ length: 15 }, (_, i) => `${row}${i + 1}`));
        return seatLayout;
    };
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [totalPrice, setTotalPrice] = useState(50);

    // Sample seat layout (simplified)
    const seatLayout = generateSeatLayout(); // Generate the seat layout


    const seatTypes = {
        selected: '#FFD700', // gold
        available: '#ADD8E6', // light blue (regular)
        vip: '#4B0082', // purple
        unavailable: '#D3D3D3', // light grey
    };

    const handleSeatSelection = (seat) => {
        if (selectedSeats.includes(seat)) {
            setSelectedSeats(selectedSeats.filter((s) => s !== seat));
        } else {
            setSelectedSeats([...selectedSeats, seat]);
        }
    };

    return (
        <ScrollView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Icon name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                <View style={{ flex: 1, alignItems: 'center' }}>
                    <Text style={styles.movieTitle}>The King's Man</Text>
                    <Text style={styles.subTitle}>March 5, 2021 | 12:30 Hall 1</Text>
                </View>
            </View>

            {/* Screen Representation */}
            <View style={{ backgroundColor: '#f0f0f0', padding: 10 }}>
                <View style={styles.screenSection}>
                    <View style={styles.screenCurve} />
                    <Text style={styles.screenLabel}>SCREEN</Text>
                </View>

                {/* Seat Layout */}
                <View style={styles.seatLayout}>
                    {seatLayout.map((row, rowIndex) => (
                        <View key={rowIndex} style={styles.seatRow}>
                            {row.map((seat) => (
                                <TouchableOpacity
                                    key={seat}
                                    style={[
                                        styles.seat,
                                        selectedSeats.includes(seat) ? { backgroundColor: seatTypes.selected } : { backgroundColor: seatTypes.available },
                                    ]}
                                    onPress={() => handleSeatSelection(seat)}
                                />
                            ))}
                        </View>
                    ))}
                </View>
            </View>
            {/* Seat Types Legend */}
            <View style={styles.legend}>
                <View style={styles.legendItem}>
                    <View style={[styles.legendColorBox, { backgroundColor: seatTypes.selected }]} />
                    <Text>Selected</Text>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.legendColorBox, { backgroundColor: seatTypes.unavailable }]} />
                    <Text>Not Available</Text>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.legendColorBox, { backgroundColor: seatTypes.vip }]} />
                    <Text>VIP (150$)</Text>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.legendColorBox, { backgroundColor: seatTypes.available }]} />
                    <Text>Regular (50$)</Text>
                </View>
            </View>

            {/* Seat Picker */}
            <View style={styles.seatPicker}>
                <Text style={styles.pickerLabel}>4 / 3 row</Text>
                <TouchableOpacity style={styles.pickerButton}>
                    <Icon name="remove" size={24} color="#000" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.pickerButton}>
                    <Icon name="add" size={24} color="#000" />
                </TouchableOpacity>
            </View>

            {/* Total Price and Proceed Button */}
            <View style={styles.footer}>
                <Text style={styles.totalPrice}>Total Price: $ {totalPrice}</Text>
                <TouchableOpacity style={styles.proceedButton}>
                    <Text style={styles.proceedButtonText}>Proceed to Pay</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default SelectSeat;


