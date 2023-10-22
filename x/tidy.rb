#!/usr/bin/env ruby
require 'fileutils'

# Glob all JavaScript files in the current directory
Dir.glob('src/**/*.js').each do |filename|
  p filename

  lines = File.readlines(filename)

  # Check if the first line is a starting code fence and the last line is an ending code fence
  if lines.first.chomp.index("```") === 0 && lines.last.chomp == "```"
    # Remove the first and last lines
    lines.shift
    lines.pop

    # Write the modified lines back to the file
    File.open(filename, 'w') do |file|
      file.puts(lines)
    end
  end
end
