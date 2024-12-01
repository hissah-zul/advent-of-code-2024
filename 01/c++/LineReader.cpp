#include "LineReader.hpp"

LineReader::LineReader(const std::string& filePath) {
    fileStream.open(filePath);
    if (!fileStream.is_open()) {
        throw std::runtime_error("Failed to open file: " + filePath);
    }
}

LineReader::~LineReader() {
    if (fileStream.is_open()) {
        fileStream.close();
    }
}

std::optional<std::string> LineReader::getNextLine() {
    if (std::getline(fileStream, currentLine)) {
        return currentLine;
    }
    return std::nullopt; 
}
