#include <iostream>
#include <vector>
#include <sstream>
#include <algorithm>
#include "LineReader.hpp"

std::vector<int> parseLine(const std::string& line) {
    std::vector<int> numbers;
    std::stringstream ss(line);
    int number;

    while (ss >> number) {
        numbers.push_back(number);
    }

    return numbers;
}

/**
 * g++ -o main LineReader.cpp main.cpp
 */
int main() {
    try {
        LineReader reader("input.txt");
        std::vector<int> leftList;
        std::vector<int> rightList;

        while (true) {
            auto line = reader.getNextLine();
            if (!line.has_value()) {
                break; 
            }
            std::cout << "Read line: " << line.value() << std::endl;

            auto numbers = parseLine(line.value());

            leftList.push_back(numbers[0]);
            rightList.push_back(numbers[1]);
        }

        std::sort(leftList.begin(), leftList.end());
        std::sort(rightList.begin(), rightList.end());

        int distance = 0;
        for (int i = 0; i < leftList.size(); i++) {
            distance += abs(leftList[i] - rightList[i]);
        }

        std::cout << distance << std::endl;

    } catch (const std::exception& e) {
        std::cerr << "Error: " << e.what() << std::endl;
        return 1;
    }

    return 0;
}
