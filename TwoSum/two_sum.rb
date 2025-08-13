def two_sum(nums, target)
    (0...nums.length).each do |i|
        ((i+1)...nums.length).each do |j|
            if nums[i] + nums[j] == target
              # puts [i,j].inspect
                return [i,j]
            end
        end        
    end
    []
end

# two_sum([2, 7, 11, 15], 9)