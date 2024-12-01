#ifndef LINEREADER_HPP
#define LINEREADER_HPP

#include <fstream>
#include <string>
#include <optional>
#include <stdexcept>

class LineReader {
public:
    explicit LineReader(const std::string& filePath);
    ~LineReader();

    std::optional<std::string> getNextLine();

private:
    std::ifstream fileStream;
    std::string currentLine;
};

#endif // LINEREADER_HPP
