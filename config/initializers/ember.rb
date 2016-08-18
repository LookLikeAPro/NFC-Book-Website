if !Rails.env.production?
  EmberCli.configure do |c|
    c.app :frontend
  end
end